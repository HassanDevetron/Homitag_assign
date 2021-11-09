"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const movieController_1 = require("../controllers/movieController");
class MovieRoutes {
    constructor() {
        this.movieController = new movieController_1.MovieController();
    }
    routes(app) {
        // Base route
        app.route("/").get((req, res) => {
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
exports.MovieRoutes = MovieRoutes;
//# sourceMappingURL=movieRoutes.js.map