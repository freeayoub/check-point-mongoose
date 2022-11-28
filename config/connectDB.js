const mongoose =require("mongoose");
const connectDB =async () =>{
try {
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("BD is connected")
} catch (error) {
    console.log("DB is not connected")
}
}
module.exports=connectDB;