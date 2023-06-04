const express = require("express");
const app = express()

app.get("/", function(request,response){
    console.log("Peticion recibida del cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.send({ok: true, codigo: 200, message: 'Recibido!'})
});

app.listen(4000)

app.get("/bye", function(request, response){
    response.send({ok: true, code: 200, message: 'Adios!'})
})