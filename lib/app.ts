import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { PatientRoutes } from "./routes/patientRoutes";
import * as cron from "node-cron";
import { EmailSchedular } from "./cron/emailSchedular";
class App {
  public app: express.Application;
  public routesMovie: PatientRoutes = new PatientRoutes();
  public emailSchedular = new EmailSchedular();
  public mongoUrl: string = "mongodb://localhost/humanCaredb";

  constructor() {
    this.app = express();
    this.config();
    this.initializeRoutes();
    this.mongoSetup();
    this.setupCronJobs();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    (mongoose.Promise as any) = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  private initializeRoutes(): void {
    this.routesMovie.routes(this.app);
  }

  private setupCronJobs(): void {
    cron.schedule("0 */2 * * *", async () => {
      await this.emailSchedular.scheduleEmails();
    });
  }
}

export default new App().app;
