const router = require("express").Router();
const requirementDataModel = require("../model/requirement.model");

/* User Manipulation */

router.get("/req-get", async (req, res) => {
  const data = await requirementDataModel.find();
  res.send(data);
});

router.post("/req-post", async (req, res) => {
  const { reqRole, reqId, reqLocation, reqPostedDate } = req.body;
  console.log(req.body);
  const req_data = new requirementDataModel({
    reqRole,
    reqId,
    reqLocation,
    reqPostedDate
  });

  await req_data.save();
  res.send("Data posted: ");
});

router.delete("/req-delete/:id", async (req, res) => {
  const id = req.params.id;
  requirementDataModel
    .findByIdAndRemove(id)
    .then(() => {
      res.send("Data Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
