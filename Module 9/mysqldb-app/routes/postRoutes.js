const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

router.post('/create', (req, res) => {
    console.log(req.body.UserID)
    console.log('test')
    Controllers.postController.createPosts(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res)
})

module.exports = router;