# Modul 1 - Lesson 2 (56+57)  CLI & json

### work-with-json-files
How to work with a json file so that it imitates a database  
- invokeAction({action: "read"});  
- invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"});  
- invokeAction({action: "add", title: "Worm", author: "John C. McCrae"});  
- invokeAction({action: "updateById", id: "ZlC6q-FNNYWsYluTb22Dq",  title: "Ward", author: "John C. McCrae"});  
- invokeAction({action: "deleteById", id: "ZlC6q-FNNYWsYluTb22Dq"});  


### process.argv-example

### yargs-example
*yarn add yards*  

**in app.js add**
const yargs = require("yargs");  
const {hideBin} = require("yargs/helpers");  

for yards add **const bookId = _String_(id)**;  

$ node app --action getById --id 1

### commander-example
*yarn add commander*  

**in app.js add**
const {program} = require("commander")

$ node app --action read --id 1  
$ node app --action getById --id 1
$ node app -a read -i 1  
$ node app -a getById -i 1
