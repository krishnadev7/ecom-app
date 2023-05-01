const {signup,login, uploadProducts, getProducts} = require('../controller/controller');

const router = require('express').Router();

// POST methods
router.post('/signup',signup);
router.post('/login',login);
router.post('/uploadProducts',uploadProducts)

// GET methods
router.get('/product', getProducts)


module.exports = router;