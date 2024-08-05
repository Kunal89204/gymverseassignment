const mongoose  = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kunalkhandelwal108:Kunal892004@cluster0.dr7nbal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() =>{
        console.log("Database connected")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectDB;