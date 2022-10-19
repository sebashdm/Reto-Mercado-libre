const express = require('express');
const router = express.Router();
const { getItems, getItemInfo } = require('../controllers/items');

router.get('/', getItems);
router.get('/:id', getItemInfo);

module.exports = router;
