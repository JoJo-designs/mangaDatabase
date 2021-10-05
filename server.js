const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
// const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const databaseUrl = "mangadb";
const collections = ["manga"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error)
});

app.get("/all", (req, res) => {
    db.manga.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

app.listen(3000, () => {
    console.log("App running on port 3000!");
  });