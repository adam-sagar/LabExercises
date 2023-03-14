const express = require('express') // requiring the express pacakage
const testRoute = require('./routes/myTestRoute');
const app = express() // create an app using the express package
const port = 3000 // set the port to 3000

app.use('/', express.static('public'))

app.use('/mytest', testRoute);

app.listen(port, () => {
    console.log(`Example applistening athttp://localhost:${port}`)
})