// console.log("Hello from server.js");
const express = require("express");

const server = express();

// make server handle json in request body
server.use(express.json());

// Very bad movie-database
const movies = [{title: "Harry Potter: Philosophers Stone"}, {title: "Harry Potter: Chamber of Secrets"}]


// Register what happens when user goes to /hello
server.get('/hello', (request, response) => {

    response.send("Hello from server.js");
})

// TODO: create GET route /movies that sends an array of movies
server.get('/movies', (request, response) => {
    response.send(movies);
})

server.post('/movies', (request, response) => {
    // Add new movie to database
    const newMovie = request.body;

    // TODO: check if newMovie is sane
    movies.push(newMovie);

    // Tell user if went fine
    response.status(201).send("New movie added!");

})

server.listen(3000, () => console.log("Starting server on port 3000..."));