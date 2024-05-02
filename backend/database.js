const mongoose=require('mongoose')

const dbconn=(url)=>{

    return mongoose.connect(url).then(()=>console.log("Database connected"))
}

module.exports=dbconn;