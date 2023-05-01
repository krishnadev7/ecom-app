const User = require('../database/model/userModel');
const Product = require('../database/model/productsModel');
const bcrypt = require('bcrypt')

/** http://localhost:8000/api/signup */
const signup = async(req,res) => {
    const {firstName,lastName,email,password,profileImage} = req.body;
    try {
        const emailExists = await User.findOne({email});
        if(emailExists){
            return res.status(400).json({msg:"User already exists with this email...!"});
        }
        const hashedPass = await bcrypt.hash(password,10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPass,
            profileImage
        })
        const user = await newUser.save();
        console.log(user);
        res.status(200).json({msg: 'successfully created..!'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:error});
    }
}

/** http://localhost:8000/api/login */
const login = async (req,res) => {
    try {
        const isEmail = await User.findOne({email: req.body.email});

        if(!isEmail){
            return res.status(404).json({msg:"User doesn't exist with this email id..!",alert:false});
        }

        const passCheck = await bcrypt.compare(req.body.password,isEmail.password);
        if(!passCheck){
            return res.status(400).json({msg:"invalid password...!",alert:false});
        }
        const {password,...data} = isEmail._doc;
        return res.status(200).json({msg:"Login Successfully",alert:true, data});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: error})
    }
}

/** http://localhost:8000/api/uploadProducts */
const uploadProducts = async (req,res) => {
    console.log(req.body);
    const data = await Product(req.body);
    data.save();
    res.status(200).json({msg: 'Uploaded Successfully...!'})
}

/** http://localhost:8000/api/product */
const getProducts = async (req,res) => {
    const data = await Product.find({});
    res.send(data)
}

module.exports = {signup,login,uploadProducts,getProducts}