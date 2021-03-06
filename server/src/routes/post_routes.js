const express = require('express');
const { getPosts, createPosts } = require('../controller/postController');
const router = express.Router();

router.get('/posts', getPosts);

router.post('/posts', createPosts)

module.exports = router;
