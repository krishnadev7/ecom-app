const User = require('../database/model/userModel');
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

module.exports = signup