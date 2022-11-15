const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database')

const authController = require('./controllers/authController')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(authController)

app.listen(3000, () => {
	console.log('Server success...')
})