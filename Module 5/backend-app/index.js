const express = require('express') // requiring the express pacakage
const testRoute = require('./routes/myTestRoute');
const calculatorRoute = require('./routes/calculatorRoute'); // where to find the file locally
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const friendRoutes = require('./routes/friendRoutes');

const app = express() // create an app using the express package
const port = 3000 // set the port to 3000

app.use(express.json());

app.use('/', express.static('public'));
app.use('/mytest', testRoute);
app.use('/calculator', calculatorRoute); // where to find in the browser
app.use('/friends', friendRoutes);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.log(`Example applistening at http://localhost:${port}`)
})