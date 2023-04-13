"use strict";
const axios = require("axios");

const getCharacters = (req, res) => {

    const page = req.query.page ?? 1;

    axios.get(`https://api.disneyapi.dev/characters?page=${page}`)
        .then((response) => {
            const names = response.data.data.map(character => {
                return {Name: character.name, id: character._id};
            })
            res.send(names);
        })
        .catch(err => {throw err})
}

const getCharacterById = (req, res) => {

    const id = req.params.id;

    axios.get(`https://api.disneyapi.dev/characters/${id}`)
        .then((response) => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(err => {res.send (err.message)})
}  
 
module.exports = {
    getCharacters, getCharacterById
}  