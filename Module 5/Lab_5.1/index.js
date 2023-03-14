const express = require('express')
const app1 = express()
const port1 = 3001

app1.get('/', (req, res) => {
    res.send('Hello World #1')
})

app1.listen(port1, () => {
    console.log(`Example app1 listening at http://localhost:${port1}`)
})





const app2 = express()
const port2 = 3002

app2.get('/', (req, res) => {
    res.send('Hello World #2')
})

app2.listen(port2, () => {
    console.log(`Example app2 listening at http://localhost:${port2}`)
})





const app3 = express()
const port3 = 3003

app3.get('/', (req, res) => {
    res.send('Hello World #3')
})

app3.listen(port3, () => {
    console.log(`Example app2 listening at http://localhost:${port3}`)
})