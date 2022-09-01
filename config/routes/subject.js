const express = require("express");
const {
  listSubject,
  detailSubject,
} = require("../controllers/subjects");
const router = express.Router();
const SubjectModel = require("../models/subject");

router.get("/subject", listSubject);
router.get("/subject/:id", detailSubject);

module.exports = router;