const { stringify } = require('querystring');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs/promises');


// let objeto = {
//     name: "Pepito",
//     surname: "de Miguel",
//     age: 26,
// }

// fs.writeFile("./objeto.json", JSON.stringify(objeto))
// .then(() =>
// {
//     return fs.readFile('./objeto.json', 'utf8')
// })
// .then((data) => 
// {
//     console.log(JSON.parse(data))
// })
// .catch((error) =>
// {
//     console.log(error)
// })

// async function writeRead(obj){
//     try{
//         await fs.writeFile("./objeto2.json", JSON.stringify(obj));
//         let objnuevo = await fs.readFile('./objeto2.json', 'utf8');

//         console.log(JSON.parse(objnuevo))
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// writeRead()

// let objeto3 = {
//     name: "",
//     surname: "",
//     age: 0,
// }

function pregunta(pregunta){
    const question = new Promise ((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    });
    return question;
}

// pregunta("Como te llamas?")
// .then ((respuesta) => {
//     objeto3.name = respuesta;
//     pregunta("Como te apellidas?")
//     .then((respuesta2) => {
//         objeto3.surname = respuesta2;
//         pregunta("Cuantos años tienes?")
//             .then((respuesta3) => {
//                 objeto3.age = respuesta3;
//                 fs.writeFile("./objeto.json", JSON.stringify(objeto3))
//                 .then(() =>
//                 {
//                     return fs.readFile('./objeto.json', 'utf8')
//                 })
//                 .then((data) =>
//                 {
//                     console.log(JSON.parse(data))
//                 })
//                 .catch((error) =>
//                 {
//                     console.log(error)
//                 })
//         })
//     })
// })
// .catch(err => {
//     console.log(err);
// })

async function writeRead2() {
    try {    
        const name = await pregunta ("Como te llamas?")
        const surname = await pregunta ("Como te apellidas?")
        const age = await pregunta ("cuantos años tienes?")
        let objeto4 = {
            name: name,
            surname: surname,
            age: age,
        }
        // console.log(objeto4)
        await fs.writeFile("./objeto2.json", JSON.stringify(objeto4));
        let objnuevo = await fs.readFile('./objeto2.json', 'utf8');

        console.log(JSON.parse(objnuevo))
    }
    catch(error){
        console.log(error)
    }
}
writeRead2()