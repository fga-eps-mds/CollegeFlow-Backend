const SubjectModel = require("../models/subject");

exports.listSubject = async (req, res) => {
  try {
    const subjects = await SubjectModel.find(
      {},
      "-rating -reviews -numReviews"
    );
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.detailSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findById(id, "-numReviews");

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};