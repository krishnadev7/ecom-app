const {signup,login, uploadProducts} = require('../controller/controller');

const router = require('express').Router();

// POST methods
router.post('/signup',signup);
router.post('/login',login);
router.post('/uploadProducts',uploadProducts)


module.exports = router;