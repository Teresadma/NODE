
const Book = require('../models/book');
let book = new Book();


function getStart (request, response){
    let respuesta = {error: true, codigo:200, mensaje: "Punto de inicio"};
    response.send(respuesta);
}

function getBook (request, response){
    let respuesta;
    if(book != null)
        respuesta = {error: false, codigo: 200, data: book};
    else
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
    
    response.send(respuesta);
}

// function getBookParams (request, response){
//     let id = request.params.id_book
//     if (book != null && id === book.id_book)
//         response.send({error: false, codigo: 200, data: usuario});
//     else 
//         response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});
// }

function postBook (request, response){
    let respuesta;
    console.log(request.body)
    if (book === null){
        book = {id_book: request.body.id_book,
                id_user: request.body.id_user,
                title: request.body.title,
                type: request.body.type}

        respuesta = {error: false, codigo: 200,
                    mensaje: "Libro creado", data: book};
    } else 
        respuesta = {error: true, codigo: 200,
                    mensaje: "Libro ya existe"};
    
    response.send(respuesta);
}

function putBook (request, response){
    let respuesta
    if (book != null){
        book.id_book =  request.body.id_book,
        book.id_user = request.body.id_user,
        book.title = request.body.title,
        book.type = request.body.type
        respuesta = {error: false, codigo: 200,
                    mensaje: "Libro actualizado", data: book};
    } else
        respuesta = {error: true, codigo: 200,
                    mensaje: "El libro no existe", data: book};

    response.send(respuesta);
}

function deleteBook (request, response){
    let respuesta
    if (book != null) {
        book = null;
        respuesta = {error: false, codigo: 200,
                    mensaje: "Libro borrado", data: book};
    } else
        respuesta = {error: true, codigo: 200,
                    mensaje: "El libro no existe", data: book};
    
    response.send(respuesta);
}

module.exports = {getStart, getBook, postBook, putBook, deleteBook}
// getUser, getUserParams, postUser, putUser, deleteUser