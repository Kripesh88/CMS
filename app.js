const express = require("express")
const { blogs } = require("./model/index.js")
const app =express()


//requiring multerConfig
const {multer,storage}=require("./middleware/multerConfig.js")


const upload=multer({storage:storage}) //passing the configuration from storage engine (./middleware/multerConfig.js)

//ALTERNATIVE => the next two lines
// const multer= require("./middleware/multerConfig.js").multer
// const storage=require("./middleware/multerConfig.js").storage




// telling nodejs to require and use .env
require("dotenv").config()

require("./model/index.js")

//telling nodeJS to accept the incoming data(Parsing data)
app.use(express.json()) //cT(content-Type)=application/json handle garcha
app.use(express.urlencoded( {extended : true}))  //cT(content-type)=> application/x-www-form-urlencoded handle garcha
 

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
app.post("/addBlog",upload.single('image'),async(req,res)=>{

  
  await blogs.create({
    Title:req.body.title,
    subTitle:req.body.subtitle,
    description:req.body.description,
    imageUrl:req.file.filename
    
  })
  //ALTERNATIVE
  // const{title,subTitle,description}=req.body

  // await blogs.create({
  //     title,
  //     subTitile,
  //     description
  // })
  res.send("Blog created successfully")
})


app.listen(PORT,()=>{  //3000 port ma hamro project start/run/allocate huncha
    console.log("NodeJS project has started at port " + PORT)
})





