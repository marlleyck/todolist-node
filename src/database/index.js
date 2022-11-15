const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'todolist'
})

connection.connect((err) => {
	if (err) {
		console.log(err)
	}

	console.log('Sucess mysql connection!')
})

module.exports = connection