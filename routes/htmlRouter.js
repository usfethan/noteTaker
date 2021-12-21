const router = require("express").Router();
const fs = require("fs");
const path = require("path");


const { application } = require("express");

//get notes
application.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "./public/notes.html"))
);

application.get("*", (req, res) => 
    res.sendFile(path.join(__dirname, "./public/index.html"))
);

module.exports = router;