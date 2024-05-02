const express= require("express");
const {createUser,getUser,updateUser,deleteUser,getUserbyid} =require("../controllers/user")


const router= express.Router();

//api routes
router.route("/").get(getUser).post(createUser)
router.route("/:id").put(updateUser).delete(deleteUser)

router.route("/userbyid/:id").get(getUserbyid)


module.exports=router;