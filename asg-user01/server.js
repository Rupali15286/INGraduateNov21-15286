const express = require('express');
const server = express();

const cors = require('cors');
const cors_options = {
    origin:'http://localhost:4200',
    OptionSuccessStatus: 200
};
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(cors_options));
const port=3000;
const USERS= [
    {ID:1, userName:"Rupali"},
    {ID:2, userName:"Priti"},
    {ID:1, userName:"Kajal"}
]
server.get("/",(req,resp)=>{
resp.send("express is working");
});

server.get('/users/',(req,resp)=>{

    resp.setHeader("Content-Type","application/json");

    resp.send(USERS);

});


server.listen(port,()=>{

    console.log("http://localhost:3000 started ")

}) 