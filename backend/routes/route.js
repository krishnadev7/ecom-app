const signup = require('../controller/controller');

const router = require('express').Router();

// POST methods
router.post('/signup',signup)


module.exports = router;