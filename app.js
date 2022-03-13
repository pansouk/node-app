// Node specific modules
const http = require('http')


// Packages modules
const express = require('express')


// Create an express application
const app = new express()

//  app is a valid request handler to construct the server.
const server = http.createServer(app);

server.listen(3000);