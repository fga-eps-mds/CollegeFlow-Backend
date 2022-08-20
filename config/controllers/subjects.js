const SubjectModel = require("../models/subject");

exports.createSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.listSubject = async (req, res) => {
  try {
    const subjects = await SubjectModel.find({});
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};