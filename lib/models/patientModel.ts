import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
  programIdentifier: {
    type: String,
  },
  dataSource: {
    type: String,
  },
  cardNumber: {
    type: String,
    unique: true,
  },
  memberID: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  telephoneNumber: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  consent: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
});
