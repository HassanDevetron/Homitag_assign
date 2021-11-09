"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const movieModel_1 = require("../models/movieModel");
const mongoose = require("mongoose");
const Movie = mongoose.model("Movie", movieModel_1.MovieSchema);
class MovieController {
    createMovie(req, res) {
        let newMovie = new Movie(req.body);
        newMovie.save((err, movie) => {
            if (err) {
                res.send(err);
            }
            res.json(movie);
        });
    }
    getMovies(req, res) {
        Movie.find({}, (err, movies) => {
            if (err) {
                res.send(err);
            }
            res.json(movies);
        });
    }
    getMovieByID(req, res) {
        Movie.findById(req.params.movieId, (err, movie) => {
            if (err) {
                res.send(err);
            }
            res.json(movie);
        });
    }
    updateMovie(req, res) {
        Movie.findOneAndUpdate({ _id: req.params.movieId }, req.body, { new: true }, (err, movie) => {
            if (err) {
                res.send(err);
            }
            res.json(movie);
        });
    }
    deleteMovie(req, res) {
        Movie.remove({ _id: req.params.movieId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Movie deleted successfully" });
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movieController.js.map