const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  _id: false,
  professor: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    default: 0,
  },
});

const subjectSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    maxlength: 7,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
});

const SubjectModel = mongoose.model("Subject", subjectSchema);

module.exports = SubjectModel;
