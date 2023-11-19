const books = require("./books")

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

//console.log(process.argv);
const actionIndex = process.argv.indexOf("--action");
// if(actionIndex !== -1) {
//     const action = process.argv[actionIndex];
//     console.log(action);
//     const actionOption = process.argv[actionIndex+1];
//     console.log(actionOption);
// }
if(actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    invokeAction({action});
}



// $ node app --action read
// $ node app --action getById  --id "u9kgwNWGi3uUUwh0b8V49"
// $ node app --action add  --title "Worm"  --author "John C. McCrae"
// $ node app --action updateById -- id "ZlC6q-FNNYWsYluTb22Dq" --title "Ward" --author: "John C. McCrae"});
//invokeAction({action: "deleteById", id: "ZlC6q-FNNYWsYluTb22Dq"}); 