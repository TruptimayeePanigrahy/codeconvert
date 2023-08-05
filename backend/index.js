const express=require("express")
const cors=require("cors")
const { code } = require("./routes/coderoute")
const port=5678

const app=express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/code",code)













app.listen(port,()=>{
    console.log("server is running")
})