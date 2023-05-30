const fs = require('fs');
const { stringify } = require('querystring');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Mensaje 1");
setTimeout(function (){
    console.log("Mensaje 2")
    setTimeout(function (){
        console.log("Mensaje 3")
    },1000)
},3000)

let objeto = {
    name: "Pepe",
    surname: "de Miguel",
    age: 26,
}
let objetoJSON = JSON.stringify(objeto)
fs.writeFile("./objeto.json",objetoJSON, error => {
    if (error)
      console.log(error)
    else
        fs.readFile('./objeto.json', 'utf8', function(err, data) {
            if (err) {
              return console.log(err);
            }          
            console.log(data);
          })
});

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
            console.log(objeto2)
            rl.close();
            let objetoJSON = JSON.stringify(objeto2)
            fs.writeFile("./objeto.json",objetoJSON, error => {
                if (error)
                console.log(error)
                else
                    fs.readFile('./objeto.json', 'utf8', function(err, data) {
                        if (err) {
                        return console.log(err);
                        }          
                        console.log(data);
                })
            });
        })
    })
});

  
