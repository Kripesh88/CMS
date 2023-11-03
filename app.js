const express = require("express")
const { blogs } = require("./model/index.js")
const app =express()

// telling nodejs to require and use .env
require("dotenv").config()

require("./model/index.js")

//telling nodeJS to accept the incoming data(Parsing data)
app.use(express.json())
app.use(express.urlencoded( {extended : true}))
 

// or yo duita line ekkaichoti use garna => (const app=require("express")());

//saying nodeJS to set all required config for ejs (to use ejs)
app.set("view engine","ejs")


app.get("/",(req,res)=>{
  res.render("allBlogs.ejs")
})


app.get("/addBlog",(req,res)=>{
    res.render("addBlog.ejs")
})


const PORT=process.env.PORT


//api for handling app data
app.post("/addBlog",async(req,res)=>{
   await blogs.create({
    Title:req.body.title,
    subTitle:req.body.subtitle,
    description:req.body.description
  })
  res.send("Blog created successfully")
})


app.listen(PORT,()=>{  //3000 port ma hamro project start/run/allocate huncha
    console.log("NodeJS project has started at port " + PORT)
})


