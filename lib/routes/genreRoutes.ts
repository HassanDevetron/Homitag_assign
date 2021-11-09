import { Request, Response } from "express";
import { GenreController } from "../controllers/genreController";

export class GenreRoutes {
  public genreController: GenreController = new GenreController();

  public routes(app): void {
    // Base route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request success" });
    });

    // Get All genres
    app.route("/genre").get(this.genreController.getGenres);

    // Create a genre
    app.route("/genre").post(this.genreController.createGenre);

    // Get a genre
    app.route("/genre/:genreId").get(this.genreController.getGenreByID);

    // Update a genre
    app.route("/genre/:genreId").put(this.genreController.getGenreByID);

    // Delete a genre
    app.route("/genre/:genreId").delete(this.genreController.getGenreByID);
  }
}
