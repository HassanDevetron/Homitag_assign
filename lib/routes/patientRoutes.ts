import { Request, Response } from "express";
import { PatientController } from "../controllers/patientController";

export class PatientRoutes {
  public patientController: PatientController = new PatientController();

  public routes(app): void {
    // Base route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request success" });
    });

    // Load patients from csv file
    app.route("/load-csv-patients").get(this.patientController.loadPatientsFromCsv);
    
    // Get All patients
    app.route("/patient").get(this.patientController.getPatients);

    // Create a patient
    app.route("/patient").post(this.patientController.createPatient);

    // Get a Patient
    app.route("/patient/:patientId").get(this.patientController.getPatientByID);

    // Update a Patient
    app.route("/patient/:patientId").put(this.patientController.getPatientByID);

    // Delete a Patient
    app.route("/patient/:patientId").delete(this.patientController.getPatientByID);
  }
}
