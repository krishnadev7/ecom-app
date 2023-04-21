const {signup,login} = require('../controller/controller');

const router = require('express').Router();

// POST methods
router.post('/signup',signup);
router.post('/login',login);


module.exports = router;