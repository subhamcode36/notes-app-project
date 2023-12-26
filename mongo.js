const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost27017/SendDataToBackend")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed")
})

const schema=new mongoose.schema({
    msg:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("newCollection", schema)

module.exports=collection
