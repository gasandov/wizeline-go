const { Router } = require('express');

const postsRouter = require('./posts/posts');

const router = Router();

router.use('/posts', postsRouter);

module.exports = router;

