const Book = require('../models/book');

let books = [];

function getStart (request, response){
    let respuesta = {error: true, codigo:200, mensaje: "Punto de inicio"};
    response.send(respuesta);
}

function getBooks (request, response){
    let respuesta;
    if(books != null)
        respuesta = {error: false, codigo: 200, data: books};
    else
        respuesta = {error: true, codigo: 200, mensaje: "Los libros no existen"}
    
    response.send(respuesta);
}

// function getBookParams (request, response){
//     let id = request.params.id_book
//     if (book != null && id === book.id_book)
//         response.send({error: false, codigo: 200, data: usuario});
//     else 
//         response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});
// }

function postBooks (request, response){
    let respuesta;
    let { id_book, id_user, title, type } = request.body;
    let bookExists = books.find((book) => book.id_book === id_book);
        if (bookExists) {
            respuesta = {error: true, codigo: 200,
                        mensaje: 'El libro ya existe.', data: bookExists};
            response.send(respuesta);
          
        }else{
            let newBook = new Book(id_book, id_user, title, type);
            books.push(newBook);      
                respuesta = {error: false, codigo: 201,
                            mensaje: 'Libro creado.', data: books};
                response.send(respuesta);        
        }   
}  

function putBooks (request, response){
    let respuesta;
    let id = request.body.id_book;
    let changeIndex = books.findIndex((book) => book.id_book === id)
        if(changeIndex !== -1){
            let changeBook = books[changeIndex];
            changeBook.id_user = request.body.id_user;
            changeBook.title = request.body.title;
            changeBook.type = request.body.type;
            respuesta = {error: false, codigo: 200,
                        mensaje: "Libro actualizado", data: changeBook};
        } else {
            respuesta = {error: true, codigo: 200,
                mensaje: "El libro no existe"};

        response.send(respuesta);
        }
}

// function deleteBooks (request, response){
//     let respuesta;
//     let id_book = request.body.id_book;
//     let deleteIndex = books.findIndex((book) => book.id_book === id_book)
//         if (deleteIndex !== -1) {
//             let deletedBook = books.splice(deleteIndex, 1)
//             respuesta = {error: false, codigo: 200,
//                         mensaje: "Libro borrado", data: deletedBook};
//         } else
//             respuesta = {error: true, codigo: 200,
//                         mensaje: "El libro no existe", data: null};
        
//     response.send(respuesta);
// }

function deleteBooks(request, response)
{
    let respuesta;
    let id = request.params.id_book;
    let filtrado = books.filter(book => book.id_book != id);
    if (filtrado.length != books.length) {
        books = filtrado;
        respuesta = {error: false, codigo: 200,
                    mensaje: 'Libro borrado', data: books}
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El libro no existe'};

        response.send(respuesta);
}


module.exports = {getStart, getBooks,postBooks, putBooks, deleteBooks}
// postBooks, putBooks, deleteBooks