const express = require("express")
const app = express()

app.get("/", (req,res)=> {
    res.send("Hello World!")
})

// to debug if the app is running
app.listen(8080, ()=>
console.log("Hi, Hello World!")
)