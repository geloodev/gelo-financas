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

// route-specific middleware
const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key']
    if (apiKey === 'secret') {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

app.get('/protected', authenticate, (req, res) => {
    res.send('Proctected resource')
})

// built-in middleware for parsing json
app.use(express.json())

// built-in middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }))

app.post('/data', (req, res) => {
    console.log(req.body)
    res.send('Data received.')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})


