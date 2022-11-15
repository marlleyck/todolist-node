const mysql = require('mysql')

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'linduxz.com',
	database: 'todolist'
})

conn.connect((err) => {
	if (err) {
		console.log(err)
	}

	console.log('Sucess mysql connection!')
})

module.exports = conn