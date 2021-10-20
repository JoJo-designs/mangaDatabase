const router = require('express').Router();
const Manga = require("../mangaModel")


router.get("/api/all", (req, res) => {
    Manga.find({}) 
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get("/api/one", (req, res) => {
    Manga.findOne({ title: req.body.title} )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post("/api/add", ({ body }, res) => {
    Manga.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;