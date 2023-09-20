const express = require("express");
const app = express();
const router = require("./router")
const debug = require("debug")("my-application");

app.use("/api",router);

app.listen(3200,() =>{
    debug("server run at port 3200");
})