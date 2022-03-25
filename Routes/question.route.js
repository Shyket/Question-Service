const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getQuestions,
  setQuestion,
} = require("../Controller/question.controller");

router.get("/", getQuestions);

router.post(
  "/set",
  [
    check("tag").not().isEmpty().withMessage("tag is required"),
    check("options").not().isEmpty().withMessage("options is required"),
    check("point").not().isEmpty().withMessage("point is required"),
    check("description").not().isEmpty().withMessage("description is required"),
  ],
  setQuestion
);

module.exports = router;
