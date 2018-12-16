const express = require('express');
const router = express.Router();

router.use('/api', require('./player'));

module.exports = router;