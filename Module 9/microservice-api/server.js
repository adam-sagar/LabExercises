const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type - application / json
app.use(express.json());

let characterRoutes = require('./routes/characterRoutes')
app.use('/api/characters', characterRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});   