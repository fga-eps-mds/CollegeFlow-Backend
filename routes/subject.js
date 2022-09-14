const express = require("express");
const {
  createSubject,
  listSubject,
  detailSubject,
  createReview,
} = require("../controllers/subjects");
const router = express.Router();
const SubjectModel = require("../models/subject");

router.post("/subject", createSubject);
router.get("/subject", listSubject);
router.get("/subject/:code", detailSubject);
router.post("/subject/:code/review", createReview);

module.exports = router;