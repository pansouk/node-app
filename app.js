// Node specific modules
const http = require('http')


// Packages modules
const express = require('express')


// Create an express application
const app = new express()

// Middlewares are a basic consept in express js
app.use((req, res, next) => {
    console.log('In the middleware')
    next(); // Allows the request to continue to the next middleware
})

app.use((req, res, next) => {
    console.log('To the next middleware')
    res.send('<h1>Hello from express!!</h1>')
})

//  app is a valid request handler to construct the server.
const server = http.createServer(app);

server.listen(3000);