const mongoose = require("mongoose");
const {Schema}=mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: { type: String, require: true, unique: false },
  password: { type: String, require: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("user", UserSchema);
