const express = require("express");
const cart = express.Router();



let cartItems = [{id: 01, product: "apple", price: 3.50, quantity: 1}, {id: 02, product: "banana", price: 0.99, quantity: 1}, {id: 03, product: "strawberry", price: 2.99, quantity: 1}, {id: 04, product: "potato", price: 3.99, quantity: 5} ];


cart.get("/", (req, res) => {
console.log(req.params);
console.log(`aloha ${cartItems}`);
res.json({data: cartItems});
});

cart.get("/cart-items", (req, res) => {
    
    res.send(`Getting all items... ${cartItems}`);
    console.log(`aloha ${cartItems}`);
});

cart.post('/cart-items', (req, res) => {
    console.log(req.params);
    res.send("Adding a cart item...");
});

cart.put('/cart-items/:id', (req, res) =>
{
    console.log(req.body);
    console.log(req.params.id);
    res.send("Updating an item...");
});

cart.delete('/cart-items', (req, res) =>
{
    console.log(req.params);
    res.send("Deleting an item...");
});

cart.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("cart GET ID");
});


module.exports = cart;