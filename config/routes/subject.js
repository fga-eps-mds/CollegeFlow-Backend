const express = require("express");
const { createSubject, listSubject } = require("../controllers/subjects");
const router = express.Router();
const { check } = require("express-validator");
const SubjectModel = require("../models/subject");

router.post(
  "/subject",
  [
    check(
      "subjectCode",
      "O código da disciplina deve ter no máximo 7 caracteres"
    ).isLength({ max: 7 }),
    check(
      "name",
      "O nome da disciplina deve ter somente caracteres"
    ).isString(),
  ],
  createSubject
);

router.get("/subject", listSubject);

// router.delete("/subject:id", deleteSubject);

router.patch("/subject/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/subject/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await SubjectModel.findByIdAndRemove(id);

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;