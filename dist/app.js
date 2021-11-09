"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movieRoutes_1 = require("./routes/movieRoutes");
const genreRoutes_1 = require("./routes/genreRoutes");
class App {
    constructor() {
        this.routesMovie = new movieRoutes_1.MovieRoutes();
        this.routesGenre = new genreRoutes_1.GenreRoutes();
        this.mongoUrl = 'mongodb://localhost/NitFixdb';
        this.app = express();
        this.config();
        this.initializeRoutes();
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    initializeRoutes() {
        this.routesMovie.routes(this.app);
        this.routesGenre.routes(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map