const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    record: { type: String, required: true },
    date: { type: String, default: new Date().toLocaleDateString() },
    completed: { type: Boolean, default: false },
  },
  {
    collection: "todos",
  }
);

const model = mongoose.model("TodoModel", TodoSchema);

module.exports = model;
