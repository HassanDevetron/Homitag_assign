"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=genreModel.js.map