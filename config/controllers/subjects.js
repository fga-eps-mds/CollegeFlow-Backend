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

exports.deleteSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findByIdAndDelete(id);

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findByIdAndUpdate(id, req.body, {new: true});

    res.status(200).json(subject)
  }catch(error){
    res.status(500).send(error.message)
  }
};