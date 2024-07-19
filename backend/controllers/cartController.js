// controllers/cartController.js
const Cart = require('../models/cartModel');

// Add product to cart
const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // Cart exists for user, update it
            const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
            if (productIndex > -1) {
                let productItem = cart.products[productIndex];
                productItem.quantity += quantity;
                cart.products[productIndex] = productItem;
            } else {
                cart.products.push({ productId, quantity });
            }
            cart = await cart.save();
            return res.status(201).json(cart);
        } else {
            // No cart exists, create one
            const newCart = await Cart.create({
                userId,
                products: [{ productId, quantity }]
            });
            return res.status(201).json(newCart);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addToCart };
