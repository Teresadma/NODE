var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

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

function readConsole (callback){
    let objeto3 = {
        name: "",
        surname: "",
        age: 0,
    }
    pregunta("Como te llamas?")
    .then ((respuesta) => {
        objeto3.name = respuesta;
         return pregunta("Como te apellidas?")
        .then((respuesta2) => {
            objeto3.surname = respuesta2;
            pregunta("Cuantos años tienes?")
                .then((respuesta3) => {
                    objeto3.age = respuesta3;
                    return callback(objeto3)                    
            })
        })
    })
    .catch(err => {
        console.log(err);
    })   
}
// readConsole(console.log)
function readConsole2 (callback){
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
            return callback(objeto4)
        }
        catch(error){
            console.log(error)
        }
    }
    writeRead2()
}
// readConsole2(console.log)

module.exports = {readConsole, readConsole2};