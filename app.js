// Node specific modules

const path = require('path')
// Packages modules
const express = require('express')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')


// Create an express application
const app = new express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

// Access static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.routes)

app.use(shopRoutes)

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.render('404', {pageTitle: 'Page not found'})
})

app.listen(3000)