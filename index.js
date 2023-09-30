const jsonServer = require("json-server");
const dotenv = require("dotenv").config();
const  server = jsonServer.create()
const router = jsonServer.router("Notes.json")
const middleweres = jsonServer.defaults();
 const port = process.env.Port||3000
 server.use(middleweres)
 server.use(router)
 server.listen(port,(res,err)=>console.log("json sarver start",port))

 