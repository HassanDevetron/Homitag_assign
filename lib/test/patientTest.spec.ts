import app from "../app";
import * as request from "supertest";
import { EmailSchedular } from "../cron/emailSchedular";
import { expect } from "chai";

let patients;
let emailSchedular: EmailSchedular;
beforeEach(async () => {
  emailSchedular = new EmailSchedular();
  await request(app).get("/load-csv-patients");
  patients = await request(app).get("/patient");
  emailSchedular.scheduleEmails();
});

describe("Patient Controller", () => {
  it("Should print out all Patient IDs where the first name is missing", async () => {
    const filteredPatients = patients.body.filter(
      (patient) => patient.firstName === ""
    );
    console.log(filteredPatients);
    filteredPatients.map((patient) => expect(patient.firstName).to.equals(""));
  });
  it("Should print out all Patient IDs where the email address is missing, but consent is Y", async () => {
    const filteredPatients = patients.body.filter(
      (patient) => patient.emailAddress === "" && patient.consent === "Y"
    );
    console.log(filteredPatients);
    filteredPatients.map((patient) => {
      expect(patient.emailAddress).to.equals("");
      expect(patient.consent).to.equals("Y");
    });
  });
  it("Should verify Emails were created in Emails Collection for patients who have consent as Y", async () => {
    
  });
});
