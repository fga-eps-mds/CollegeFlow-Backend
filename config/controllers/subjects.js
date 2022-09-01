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

exports.createReview = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, professor, rating, comment } = req.body;

    const subject = await SubjectModel.findById(id);

    const review = {
      professor,
      title,
      comment,
      rating,
    };

    subject.reviews.push(review);

    subject.numReviews = subject.reviews.length;

    subject.rating =
      subject.reviews.reduce((acc, item) => item.rating + acc, 0) /
      subject.reviews.length;

    await subject.save();
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send(error.message);
  }
};