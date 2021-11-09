import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genres: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
  }],
  duration: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});
