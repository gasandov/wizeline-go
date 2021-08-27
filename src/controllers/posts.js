const axios = require('axios');

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

async function getPost(req, res) {
  if (req.params?.id) {
    try {
      const { data } = await instance.get(`/${req.params.id}`);

      res.status(200).json({ success: true, post: data });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  res.status(400).json({
    success: false,
    message: 'id was not provided'
  });
}

async function getPosts(_, res) {
  try {
    const { data } = await instance.get();

    res.status(200).json({ success: true, posts: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}

module.exports = {
  getPost,
  getPosts
};
