const mongoose = require("mongoose");

const NotesSchema = new Schema({
  titel: {
    type: String,
    require: true,
  },
  description: { type: String, require: true },
  tag: { type: String, default: "Genral" },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("notes", NotesSchema);
