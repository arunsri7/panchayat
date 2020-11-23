const express = require('express');
const router = express.Router();
router.get('/posts', (req, res) => {
    res.json('Posts are working fine!');
});
module.exports = router;