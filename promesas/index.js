let myLib = require ("./writeAndReadObject");
let myLib2 = require ("./readConsole");

// myLib2.readConsole(objeto => {
//     myLib.writeAndRead("./personita.json",objeto)
// })

myLib2.readConsole2(objeto => {
    myLib.writeAndRead2("./personita2.json",objeto)
})
