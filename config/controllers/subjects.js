const SubjectModel = require("../models/subject");

exports.listSubject = async (req, res) => {
  try {
    const subjects = await SubjectModel.find({});
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
