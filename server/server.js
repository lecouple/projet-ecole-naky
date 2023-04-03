const express = require('express')
const dbConnect = require('./config/db')
const app = express()
const cors = require("cors")
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // for some legacy browsers
  }

dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

app.use('/students',require('./routes/student.route'))

app.listen(5000,()=>{
    console.log("serveur connecté")
})