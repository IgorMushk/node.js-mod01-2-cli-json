const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const books = require("./books");

const invokeAction = async ({action,id,title,author}) => {
    switch (action) {
        case "read":
            const allBooks = await books.getAll();
            return console.log(allBooks);
        case "getById":
            const oneBook = await books.getById(id);
            return console.log(oneBook);
        case "add":
            const newBook = await books.add({title, author});
            return console.log(newBook);
        case "updateById":
            const updateBook = await books.updateById(id, {title, author});
            return console.log(updateBook);
        case "deleteById":
            const deleteBook = await books.deleteById(id);
            return console.log(deleteBook);
        default:
            //break;
            return console.log("Unknown action");
    }
}

const arr = hideBin(process.argv);
//console.log(arr);
//=$ node app --action getAll
//=[ '--action', 'getAll' ]

const {argv} = yargs(arr);
//console.log(argv);
//=$ node app --action read
//={ _: [], action: 'read', '$0': 'app' }

invokeAction(argv);


// $ node app --action getById --id 1
