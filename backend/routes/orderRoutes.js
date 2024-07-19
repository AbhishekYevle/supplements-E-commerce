// routes/orderRoutes.js
const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');

const router = express.Router();

router.post('/create', createOrder);
router.get('/', getOrder);

module.exports = router;
