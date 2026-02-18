const express= require("express");
const app=express();
const port=3030;
const path=require("path");
const {v4 : uuidv4}=require("method-override");
const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set("view engin","ejs");
app.set("view",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {   
        id: uuidv4(),
        username : "apnacollage",
        content : "i love conding",
    },
    {   
        id: uuidv4(),
        username : "Mohit",
        content : "Hard Work is important to achieve success",
    },
    {
        id: uuidv4(),
        username : "Adam",
        content : "i got my first internship",
    },
];





app.listen(port,()=>{
    console.log("listening to port : 3030");
});