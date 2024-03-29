const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.characterController.getCharacters(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.characterController.getCharacterById(req, res);
})

module.exports = router;