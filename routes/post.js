const express = require('express');

const router = express.Router();

const postController = require('../controllers/posts_controllers');

router.get('/p', postController.posts);

module.exports = router;