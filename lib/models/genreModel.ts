import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
