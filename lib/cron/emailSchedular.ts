import { PatientSchema } from "../models/patientModel";
import * as mongoose from "mongoose";
import { EmailSchema } from "../models/emailModel";
import * as moment from 'moment';
const Patient = mongoose.model("Patient", PatientSchema);
const Email = mongoose.model("Email", EmailSchema);

export class EmailSchedular {
  public async scheduleEmails() {
    let patients = await Patient.find({ consent: "Y" }, "emailAddress");
    patients = patients.filter((patient) => patient.emailAddress != "");

    // Create the shape of the emails
    const emails = patients.reduce((acc, patient, index) => {
      return [
        ...acc,
        ...[
          {
            emailAddress: patient.emailAddress,
            name: "Day " + ++index,
            scheduledDate: moment().add(index, 'days').toISOString()
          },
        ],
      ];
    }, []);

    // Store the emails in the collection
    await Email.insertMany(emails);
  }
}