// Node specific modules



// Packages modules
const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')


// Create an express application
const app = new express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)

app.use(shopRoutes)

app.listen(3000)