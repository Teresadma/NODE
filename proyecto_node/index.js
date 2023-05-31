let myLib = require ("./writeAndReadObject");
let myLib2 = require ("./readConsole");


// myLib.writeAndRead("./persona.json",{nombre: "Paco", apellido:"Jimenez",edad: 67});
// myLib2.readConsole(function callback(objeto){
//     myLib.writeAndRead("./personita.json",objeto)
// })
myLib2.readConsole(objeto => {
    myLib.writeAndRead("./personita.json",objeto)
})
