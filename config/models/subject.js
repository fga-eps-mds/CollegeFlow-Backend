const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subjectCode: {
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
});

const SubjectModel = mongoose.model("Subject", subjectSchema);

module.exports = SubjectModel;
