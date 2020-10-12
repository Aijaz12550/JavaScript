const express = require('express')
const cors = require("cors")

const app = express()
const data = {name:"hello world"}

app.use(cors())

let newData = []

app.post('/',(req,res)=>{
    res.send("Welcome from server" )
})

app.get("/api/getData",(req,res)=>{
    console.log("request");
    res.send(data)
})

app.post('/api/add',(req,res)=>{

    try {
        let data1 = req.body
        newData.push(data1)
        res.send(newData)
    } catch (error) {
        res.send(error)
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})