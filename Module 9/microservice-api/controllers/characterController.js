"use strict";
const axios = require("axios");

const getDisney = (res) => {
    axios.get("https://api.disneyapi.dev/characters")
        .then((response) => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch(err => {throw err})
}

module.exports = {
    getDisney
}