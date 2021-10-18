const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mangaSchema = new Schema({
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
    illustrated: {
        type: String,
        trim: true,
    },
    publisher: {
        type: String,
        trim: true,
        required: true
    }

}
);

const Manga = mongoose.model("Manga", mangaSchema);

module.exports = Manga;
