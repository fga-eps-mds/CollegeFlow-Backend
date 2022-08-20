const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  subjectList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
