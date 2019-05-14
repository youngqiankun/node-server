const express = require('express');
const router = express.Router();

router.get('/read', (req, res) => res.send('使用nodejs和express搭建的web服务器!'));

module.exports = router;
