// Node specific modules

const path = require('path')
// Packages modules
const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')


// Create an express application
const app = new express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)

app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)