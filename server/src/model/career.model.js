const mongoose = require("mongoose");
const careerSchema = new mongoose.Schema(
  {
    reqId: String,
    reqRole: String,
    reqLocation: String,
    reqPostedDate: Date
  },
  { timestamps: true }
);
const careerDataModel = mongoose.model(
  "career-data",
  careerSchema
);
module.exports = careerDataModel;
