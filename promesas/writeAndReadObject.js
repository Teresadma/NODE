const fs = require('fs/promises');

function writeAndRead (path,obj){
    fs.writeFile(path, JSON.stringify(obj))
    .then(() =>
    {
        return fs.readFile(path, 'utf8')
    })
    .then((data) => 
    {
        console.log(JSON.parse(data))
    })
    .catch((error) =>
    {
        console.log(error)
    })
}

// writeAndRead("./pepito.json", {nombre: "Paco", apellido:"Jimenez",edad: 67})

function writeAndRead2 (path,obj){
    async function writeRead(obj1){
        try{
            await fs.writeFile(path, JSON.stringify(obj1));
            let objnuevo = await fs.readFile(path, 'utf8');
    
            console.log(JSON.parse(objnuevo))
        }
        catch(error){
            console.log(error)
        }
    };
    writeRead(obj)
}

// writeAndRead("./pepito2.json", {nombre: "Paco", apellido:"Jimenez",edad: 67})

module.exports = {writeAndRead, writeAndRead2};
