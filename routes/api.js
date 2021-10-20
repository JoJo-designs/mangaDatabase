const router = require('express').Router();
const Manga = require("../mangaModel")

// Route gets all Entires
router.get("/api/all", (req, res) => {
    Manga.find({}) 
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

// Route finds one that the title matches
router.get("/api/findOneTitle", (req, res) => {
    Manga.findOne({ title: req.body.title})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

// route gets books that match genre
router.get("/api/genre", (req, res) => {
    Manga.find({ genre: req.body.genre })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get("/api/ratings", (req, res) => {
    Manga.find({ rating: req.body.rating })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

// Routes adds a new entire to the database
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