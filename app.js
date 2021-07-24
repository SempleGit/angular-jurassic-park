const http = require('http');
const port = 3000;

const express = require('express');
const app = express();
// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const characters = require('./characters');
const shopItems = require('./shopItems');
const cart = require('./cart');

http.createServer(app).listen(port);

app.get('/shopItems', (req, res) => {
  res.json(shopItems);
});

app.get('/shopItems/:id', (req, res) => {
  res.json(shopItems.find(item => item.id === Number(req.params.id)) || {"itemName": "Item Not Found"});
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  res.json(characters.find(item => item.id === Number(req.params.id)) || {"itemName": "Item Not Found"});
});

app.post('/addToCart', (req, res) => {
  console.log("node add");
  cart.addToCart(req.body);

  res.json(cart.getItems());
});

app.post('/removeOneFromCart', (req, res) => {
  cart.removeOneFromCart(req.body);
  res.json(cart.getItems());
});

app.post('/clearCart', (req, res) => {
  cart.clearCart();
  res.json(cart.getItems());
});

app.post('/getCartItems', (req, res) => {
  res.json(cart.getItems());
})

