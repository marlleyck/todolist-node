const express = require('express')
const db = require('../database')

router = express.Router()

router.get('/tasks', (req, res) => {
	const query = `SELECT * FROM tasks`

	db.query(query, (err, results) => {
		if (err) {
			console.log(err)
		}

		return res.send(results)
	})
})

router.get('/task/:id', (req, res) => {
	const { id } = req.params

	const query = `SELECT * FROM tasks WHERE id=${id}`

	db.query(query, (err, results) => {
		if (err) {
			console.log(err)
		}

		if (!results[0]) {
			return res.status(404).send({ error: 'Task not found!'})
		}

		return res.send(results)
	})
})

router.post('/tasks', (req, res) => {
	const { title, description } = req.body

	const query = `INSERT INTO tasks (title, description) VALUES ('${title}', '${description}')`

	db.query(query, (err, results) => {
		if (err) {
			console.log(err)
		}

		return res.send({ ok: true })
	})
})

router.put('/task/:id', (req, res) => {
	const { id } = req.params
	const { title, description } = req.body

	const query = `UPDATE tasks SET title = '${title}', description = '${description}' WHERE id='${id}'`

	db.query(query, (err, results) => {
		if (err) {
			console.log(err)
		}

		if (!results[0]) {
			return res.status(404).send({ error: 'Task not found!'})
		}

		return res.send({ ok: true })
	})
})

router.delete('/task/:id', (req, res) => {
	const { id } = req.params

	const query = `DELETE FROM tasks WHERE id=${id}`

	db.query(query, (err, results) => {
		if (err) {
			console.log(err)
		}

		if (results.affectedRows == 0) {
			return res.status(404).send({ error: 'Task not found!' })
		}

		return res.send({ ok: true })
	})
})

module.exports = router