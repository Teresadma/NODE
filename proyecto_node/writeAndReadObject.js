const fs = require('fs');
const { stringify } = require('querystring');

function writeAndRead(path, obj) {    
    let objetoJSON = JSON.stringify(obj)
    fs.writeFile(path,objetoJSON, error => {
        if (error)
        console.log(error)
        else
            fs.readFile(path, 'utf8', function(err, data) {
                if (err) {
                return console.log(err);
                }    
                console.log(data)      
                return data;
            })
    })
}
// writeAndRead("./persona.json",{nombre: "Paco", apellido:"Jimenez",edad: 67});
module.exports = {writeAndRead};
