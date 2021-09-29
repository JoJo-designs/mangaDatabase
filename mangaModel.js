const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MangaSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
});

const Manga = mongoose.model("Manga", MangaSchema);

module.exports = Manga;
