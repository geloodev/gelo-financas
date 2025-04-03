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

// activity 01
app.get('/stocks', (req, res) => {
    res.json({
        stocks: [
            { id: 1, symbol: 'STK1', name: 'Stock 1', price: 1.00 },
            { id: 2, symbol: 'STK2', name: 'Stock 2', price: 2.00 },
            { id: 3, symbol: 'STK3', name: 'Stock 3', price: 3.00 },
            { id: 4, symbol: 'STK4', name: 'Stock 4', price: 4.00 }
        ]
    })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})


