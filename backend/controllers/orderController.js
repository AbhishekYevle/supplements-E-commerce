// controllers/orderController.js
const Order = require('../models/orderModel');

// Create a new order
const createOrder = async (req, res) => {
    const { products, address, paymentMethod } = req.body;

    try {
        const newOrder = await Order.create({
            // userId,
            products,
            address,
            paymentMethod
        });

        return res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

module.exports = { createOrder, getOrder };
