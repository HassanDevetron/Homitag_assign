"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.MovieSchema = new Schema({
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
    genres: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    duration: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=movieModel.js.map