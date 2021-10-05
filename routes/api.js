const router = require('express').Router();


router.on("error", error => {
    console.log("Database Error:", error);
  });

router.get("/all", (req, res) => {
    db.manga.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});