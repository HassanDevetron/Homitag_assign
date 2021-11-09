"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreRoutes = void 0;
const genreController_1 = require("../controllers/genreController");
class GenreRoutes {
    constructor() {
        this.genreController = new genreController_1.GenreController();
    }
    routes(app) {
        // Base route
        app.route("/").get((req, res) => {
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
exports.GenreRoutes = GenreRoutes;
//# sourceMappingURL=genreRoutes.js.map