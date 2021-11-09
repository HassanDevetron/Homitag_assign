import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { MovieRoutes } from "./routes/movieRoutes";
import { GenreRoutes } from "./routes/genreRoutes";
class App {
  public app: express.Application;
  public routesMovie: MovieRoutes = new MovieRoutes();
  public routesGenre: GenreRoutes = new GenreRoutes();
  public mongoUrl: string = 'mongodb://localhost/NitFixdb';
  
  constructor() {
    this.app = express();
    this.config();
    this.initializeRoutes();
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void{
    (mongoose.Promise as any) = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  private initializeRoutes(): void {
    this.routesMovie.routes(this.app);
    this.routesGenre.routes(this.app);
  }
}

export default new App().app;
