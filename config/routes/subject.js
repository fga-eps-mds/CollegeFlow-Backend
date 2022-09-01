const express = require("express");
const {
  listSubject,
  detailSubject,
  createReview,
} = require("../controllers/subjects");
const router = express.Router();
const SubjectModel = require("../models/subject");

router.get("/subject", listSubject);
router.get("/subject/:id", detailSubject);
router.post("/subject/:id/review", createReview);

module.exports = router;