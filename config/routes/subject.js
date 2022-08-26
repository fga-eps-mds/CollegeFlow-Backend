const express = require("express");
const { listSubject } = require("../controllers/subjects");
const router = express.Router();
const SubjectModel = require("../models/subject");

router.get("/subject", listSubject);

module.exports = router;
