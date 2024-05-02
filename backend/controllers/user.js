const User = require('../models/usermodel');

// create api
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({
      name,
      email,
      password
    });
    console.log(newUser);

    await newUser.save();
    return res.status(201).json({ success: true, message: "User Created Successfully...." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({success: false, message: "internal server error...."})
  }
};

// Read api

const getUser=async(req,res)=>{
    try {
       const user= await User.find({})
       if(!user){
        return res.status(404).json({success: false, message: "User not found...."})
       }
       return res.status(200).json({success: true, user})        
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error...."})
    }

}

// Update api

const updateUser =async(req,res)=>{

    try {
     const userid=req.params.id;
     console.log(userid)
     const userUpdate=await User.findByIdAndUpdate(userid,req.body,{new:true})
     if(!userUpdate){
        return res.status(404).json({success: false, message: "User not found...."})
       }

       return res.status(200).json({success: true,message: "user updated succesfully....",userUpdate})         
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error...."})
    }
}

// Delete api

const deleteUser =async(req,res)=>{

    try {
        const userid=req.params.id;
        const userDelete=await User.findByIdAndDelete(userid);
        if(!userDelete){
            return res.status(404).json({success: false, message: "User not found...."})
        }
        return res.status(200).json({success: true,message: "user deletrd succesfully...."})    
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error...."})
    }
}

// getuserbyid api

const getUserbyid =async(req,res)=>{

    try {
        const userid=req.params.id;
        const userbyid=await User.findById(userid);
        if(!userbyid){
            return res.status(404).json({success: false, message: "User not found...."})
        }
        return res.status(200).json({success: true,userbyid})    
    } catch (error) {
        return res.status(500).json({success: false, message: "internal server error...."})
    }
}
module.exports = { createUser,getUser,updateUser,deleteUser,getUserbyid};