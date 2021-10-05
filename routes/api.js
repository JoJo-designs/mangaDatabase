const { db } = require("../mangaModel");

const router = require("express").Router();


router.get('/all', async (req, res) => {
    db.manga.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data)
        }
    });
});