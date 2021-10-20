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
    },
    genre: {
        type: Array,
        required: true
    },
    rating: {
      type: String, 
      required: true,
      trim: true,
    }

}
);

const Manga = mongoose.model("Manga", mangaSchema);

module.exports = Manga;
