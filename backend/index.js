const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log('Request received: ', req.method, req.url)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello, Finance App Backend!')
})

app.get('/users', (req, res) => {
    res.json({ users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }] })
})

// route params
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`)
})

app.post('/transactions', (req, res) => {
    res.send('Transaction created sucessfully')
})

// query params
app.get('/transactions', (req, res) => {
    const category = req.query.category;
    res.send(`Transactions for category: ${category}`)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})


