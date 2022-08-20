const express = require("express");
const { createCourse, listCourse } = require("../controllers/course");
const router = express.Router();
const { check } = require("express-validator");
const CourseModel = require("../models/course");

router.post(
  "/course",
  [check("name", "O nome do curso dece ser uma string").isString()],
  createCourse
);

router.get("/course", listCourse);

router.patch("/course/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const course = await CourseModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/course/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const course = await CourseModel.findByIdAndRemove(id);

    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = router;
