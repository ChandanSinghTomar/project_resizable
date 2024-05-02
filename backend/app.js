require('dotenv').config()
const express= require('express')
const cors=require('cors')
const app=express();
const dbconnection=require('./database')
const url=process.env.MONGO_URL
const router=require("./routes/user")
const PORT= process.env.PORT || 5000
dbconnection(url);
app.use(express.json())
app.use(cors())

app.use("/api",router)

app.listen(PORT,()=>{console.log("server started on 5000")})