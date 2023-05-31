var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);

function readConsole (callback){
    var rl = readline.createInterface(process.stdin, process.stdout);
    let objeto2 = {
        name: "",
        surname: "",
        age: 0,
    }
    rl.question("What is your name? ", function(answer) {
        objeto2.name = answer;
        rl.question("Como te apellidas?", function (answer2) {
            objeto2.surname = answer2;
            rl.question("Cual es tu edad?", function (answer3){
                objeto2.age = answer3;
                rl.close();
                callback(objeto2);
            })
        })
    });
}
// readConsole(console.log)
module.exports = {readConsole};
