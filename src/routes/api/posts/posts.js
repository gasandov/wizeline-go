const { Router } = require('express');

const {
  getPost,
  getPosts
} = require('../../../controllers/posts');

const router = Router();

router
  .route('/')
  .get(getPosts);

router
  .route('/:id')
  .get(getPost);

module.exports = router;
