const express = require('express');
const router = express.Router();
const { getItems, getItemstInfo } = require('../controllers/items');

router.get('/', getItems);
router.get('/:id', getItemstInfo);

module.exports = router;
