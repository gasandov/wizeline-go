const { Router } = require('express');

const router = Router();

router.get('/', (_, res) => {
  res.status(200).send('Hello World!');
});

module.exports = router;
