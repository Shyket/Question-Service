const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: "Description is required",
    },

    tag: {
      type: String,
      required: "Tag is required",
    },

    point: {
      type: Number,
      required: "point is required",
    },

    options: [
      {
        type: String,
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
