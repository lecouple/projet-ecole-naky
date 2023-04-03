const express = require('express')
const dbConnect = require('./config/db')
const app = express()

dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/students',require('./routes/student.route'))

app.listen(5000,()=>{
    console.log("serveur connecté")
})