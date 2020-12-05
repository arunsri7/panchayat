const { Router } = require('express');
const express = require('express');
const router = express.Router();

const getPosts = (req, res) => {
    res.send("This controller is working");
}
// module.exports = router;
// module.exports = getPosts;
module.exports = {
    router,
    getPosts
  };
