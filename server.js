if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require("express")
const app = express()
const indexRouter = require('./routes/index.js')
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.json())
app.use(express.static('public'))

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })


app.use('/', indexRouter)
app.listen(process.env.PORT || 3003)
