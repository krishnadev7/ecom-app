
/** http://localhost:8000/api/signup */
const signup = async(req,res) => {
    console.log(req.body);
    return res.status(200).json({msg: "successfull register"})
}

module.exports = signup