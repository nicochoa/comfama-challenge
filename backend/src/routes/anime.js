const express = require('express');
const router = express.Router();
const { respondSearchResult } = require('../controllers/anime');

router.get('/', respondSearchResult);
router.get('/:name', respondSearchResult);

module.exports = router;