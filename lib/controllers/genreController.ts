import { Request, Response } from "express";
import { GenreSchema } from "../models/genreModel";
import * as mongoose from "mongoose";

const Genre = mongoose.model("Genre", GenreSchema);

export class GenreController {
  public createGenre(req: Request, res: Response) {
    let newGenre = new Genre(req.body);
    newGenre.save((err, genre) => {
      if (err) {
        res.send(err);
      }
      res.json(genre);
    });
  }

  public getGenres(req: Request, res: Response) {
    Genre.find({}, (err, genres) => {
      if (err) {
        res.send(err);
      }
      res.json(genres);
    });
  }

  public getGenreByID(req: Request, res: Response) {
    Genre.findById(req.params.genreId, (err, genre) => {
      if (err) {
        res.send(err);
      }
      res.json(genre);
    });
  }

  public updateGenre(req: Request, res: Response) {
    Genre.findOneAndUpdate(
      { _id: req.params.genreId },
      req.body,
      { new: true },
      (err, genre) => {
        if (err) {
          res.send(err);
        }
        res.json(genre);
      }
    );
  }

  public deleteGenre(req: Request, res: Response) {
    Genre.remove({ _id: req.params.genreId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Genre deleted successfully" });
    });
  }
}
