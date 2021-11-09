import { Request, Response } from "express";
import { MovieSchema } from "../models/movieModel";
import * as mongoose from "mongoose";

const Movie = mongoose.model("Movie", MovieSchema);

export class MovieController {
  public createMovie(req: Request, res: Response) {
    let newMovie = new Movie(req.body);
    newMovie.save((err, movie) => {
      if (err) {
        res.send(err);
      }
      res.json(movie);
    });
  }

  public getMovies(req: Request, res: Response) {
    Movie.find({}, (err, movies) => {
      if (err) {
        res.send(err);
      }
      res.json(movies);
    });
  }

  public getMovieByID(req: Request, res: Response) {
    Movie.findById(req.params.movieId, (err, movie) => {
      if (err) {
        res.send(err);
      }
      res.json(movie);
    });
  }

  public updateMovie(req: Request, res: Response) {
    Movie.findOneAndUpdate(
      { _id: req.params.movieId },
      req.body,
      { new: true },
      (err, movie) => {
        if (err) {
          res.send(err);
        }
        res.json(movie);
      }
    );
  }

  public deleteMovie(req: Request, res: Response) {
    Movie.remove({ _id: req.params.movieId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Movie deleted successfully" });
    });
  }
}
