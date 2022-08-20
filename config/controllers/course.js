const CourseModel = require("../models/course");
const SubjectModel = require("../models/subject")

exports.createCourse = async (req, res) => {
  try {
    const course = await CourseModel.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.listCourse = async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
