const mongoose = require("mongoose")

const dbConnect = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/projetdb')
    .then((reponse)=>{
        console.log("base de données connectée")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = dbConnect