require('dotenv').config()
const mysql = require('mysql')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

const connection = mysql.createConnection({
	host: 'localhost',
	user: dbUser,
	password: dbPassword,
	database: dbName
})

connection.connect((err) => {
	if (err) {
		console.log(err)
	}

	console.log('Sucess mysql connection!')
})

module.exports = connection