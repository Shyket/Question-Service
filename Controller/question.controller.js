const QuestionSchema = require("../Model/question.model");
const mongoose = require("mongoose");

exports.getQuestions = async (req, res) => {
  try {
    var questions = await QuestionSchema.find({});
    console.log(questions);
    res.status(200).json(questions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.setQuestion = async (req, res) => {
  try {
    const tag = req.query.tag;
    const description = req.query.description;
    const options = req.query.options;
    const point = req.query.point;

    var question = new QuestionSchema({
      tag: String(tag),
      description: String(description),
      options: options,
      point: String(point),
    });
    await question.save();

    res.status(200).json({ message: "Question created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};
