const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    reqId: String,
    reqRole: String,
    reqLocation: String,
    reqPostedDate: Date
  },
  { timestamps: true }
);
const userDataModel = mongoose.model("user-data", userSchema);
module.exports = userDataModel;
