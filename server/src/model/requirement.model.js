const mongoose = require("mongoose");
const requirementSchema = new mongoose.Schema(
  {
    reqId: String,
    reqRole: String,
    reqLocation: String,
    reqPostedDate: Date
  },
  { timestamps: true }
);
const requirementDataModel = mongoose.model(
  "requirement-data",
  requirementSchema
);
module.exports = requirementDataModel;
