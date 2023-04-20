const express = require('express');
const cors = require('cors');
const router = require('./routes/route');
const mongoConnection = require('./database/connection');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors())
app.use(express.json({limit: '5mb'}));

app.get('/',(req,res) => {
    res.send('hello world!')
})

// router
app.use('/api',router);

app.listen(PORT,() => {
    mongoConnection();
    console.log(`server started on http://localhost:${PORT}`);
})