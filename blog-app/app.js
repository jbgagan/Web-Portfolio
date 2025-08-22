import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs"
const __dirname = dirname(fileURLToPath(import.meta.url));




const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")

    })
    let userAuth=false

function userCheck(req,res,next){
    const username=req.body["username"]
    const password=req.body["password"]
    if(username==="admin" && password==="admin"){
        req.userAuth=true
    }
    next()
}
//app.use(userCheck)
app.post("/login",userCheck,(req,res)=>{
    if(req.userAuth){
        res.sendFile(__dirname + "/post.html")
    } else{
        res.redirect("/")
    }
})


app.post("/addpost",(req,res)=>{
   let {title,content} =req.body
   
   console.log({title,content})
})



app.listen(port)
console.log("port is listening")