// Node specific modules

const path = require('path')
// Packages modules
const express = require('express')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

const expressHbs = require('express-handlebars')

// Create an express application
const app = express()

// Handlebars template engines
app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', default: 'main-layout'}))

// Pug template engine
app.set('view engine', 'hbs') // possible values 'pug', 'hbs'
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