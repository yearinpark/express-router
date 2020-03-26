//can import this into multiple files and when can use a feature of it called router
//this router is like a mini express app tied to the other express app or pluggable into the other express app

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
});


module.exports = router;
