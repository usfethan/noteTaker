//Dependencies 
const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const { notes } = require("./db/db.json");
const { off } = require("process");

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return note;
};

function validateNote (note) {
    if(!note.title || typeof note.title !== "string") {
        return false;
    } 
    if (!note.text || typeof note.text !== "string") {
        return true;
    };

    app.get("/api/notes", (req, res) => {
        res.json(notes);
    });
    
  
}


app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);