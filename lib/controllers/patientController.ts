import { Request, Response } from "express";
import { PatientSchema } from "../models/patientModel";
import * as mongoose from "mongoose";
import CsvUtil from "../utils/CsvUtil";

const Patient = mongoose.model("Patient", PatientSchema);

export class PatientController {
  public async loadPatientsFromCsv(req: Request, res: Response) {
    const newPatients = await CsvUtil.convertCsvToJson("./patient.csv");
    await Patient.insertMany(newPatients);
    res.json({ message: newPatients });
  }

  public createPatient(req: Request, res: Response) {
    let newPatient = new Patient(req.body);
    newPatient.save((err, patient) => {
      if (err) {
        res.send(err);
      }
      res.json(patient);
    });
  }

  public getPatients(req: Request, res: Response) {
    Patient.find({}, (err, patients) => {
      if (err) {
        res.send(err);
      }
      res.json(patients);
    });
  }

  public async removeAllPatients() {
    await Patient.remove();
  }

  public getPatientByID(req: Request, res: Response) {
    Patient.findById(req.params.patientId, (err, patient) => {
      if (err) {
        res.send(err);
      }
      res.json(patient);
    });
  }

  public updatePatient(req: Request, res: Response) {
    Patient.findOneAndUpdate(
      { _id: req.params.patientId },
      req.body,
      { new: true },
      (err, patient) => {
        if (err) {
          res.send(err);
        }
        res.json(patient);
      }
    );
  }

  public deletePatient(req: Request, res: Response) {
    Patient.remove({ _id: req.params.patientId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Patient deleted successfully" });
    });
  }
}
