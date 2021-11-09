"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreController = void 0;
const genreModel_1 = require("../models/genreModel");
const mongoose = require("mongoose");
const Genre = mongoose.model("Genre", genreModel_1.GenreSchema);
class GenreController {
    createGenre(req, res) {
        let newGenre = new Genre(req.body);
        newGenre.save((err, genre) => {
            if (err) {
                res.send(err);
            }
            res.json(genre);
        });
    }
    getGenres(req, res) {
        Genre.find({}, (err, genres) => {
            if (err) {
                res.send(err);
            }
            res.json(genres);
        });
    }
    getGenreByID(req, res) {
        Genre.findById(req.params.genreId, (err, genre) => {
            if (err) {
                res.send(err);
            }
            res.json(genre);
        });
    }
    updateGenre(req, res) {
        Genre.findOneAndUpdate({ _id: req.params.genreId }, req.body, { new: true }, (err, genre) => {
            if (err) {
                res.send(err);
            }
            res.json(genre);
        });
    }
    deleteGenre(req, res) {
        Genre.remove({ _id: req.params.genreId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Genre deleted successfully" });
        });
    }
}
exports.GenreController = GenreController;
//# sourceMappingURL=genreController.js.map