import { Request, Response } from "express";
import { MovieController } from "../controllers/movieController";

export class MovieRoutes {
  public movieController: MovieController = new MovieController();

  public routes(app): void {
    // Base route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request success" });
    });

    // Get All movies
    app.route("/movie").get(this.movieController.getMovies);

    // Create a movie
    app.route("/movie").post(this.movieController.createMovie);

    // Get a Movie
    app.route("/movie/:movieId").get(this.movieController.getMovieByID);

    // Update a Movie
    app.route("/movie/:movieId").put(this.movieController.getMovieByID);

    // Delete a Movie
    app.route("/movie/:movieId").delete(this.movieController.getMovieByID);
  }
}
