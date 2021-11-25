import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmailSchema = new Schema({
  emailAddress: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  scheduledDate: {
    type: String,
  },
});
