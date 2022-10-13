var express = require("express");
var router = express.Router();

router.get("/view", function(req,resp)
{
    resp.sendFile(path.join(__dirname,"/view/details.html"))
})