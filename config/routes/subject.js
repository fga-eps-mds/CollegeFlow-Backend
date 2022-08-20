const express = require("express");
const {
  createSubject,
  listSubject,
  deleteSubject,
  updateSubject,
} = require("../controllers/subjects");
const router = express.Router();
const { check } = require("express-validator");
const SubjectModel = require("../models/subject")


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

router.delete("/subject:id", deleteSubject);

router.patch("/subject:id", updateSubject);

module.exports = router;
