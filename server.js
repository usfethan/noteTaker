//Dependencies 
const express = require("express");
const path = require("path");
const fs = require("fs");

const apiRouter = require("./routes/apiRouter");
const htmlrouter = require("./routes/htmlRouter");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(htmlrouter);
app.use(apiRouter);

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);