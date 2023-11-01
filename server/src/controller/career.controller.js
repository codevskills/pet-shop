const router = require("express").Router();
const careerDataModel = require("../model/career.model");

/* User Manipulation */

router.get("/req-get", async (req, res) => {
  const data = await careerDataModel.find();
  res.send(data);
});

router.post("/req-post", async (req, res) => {
  const { reqRole, reqId, reqLocation, reqPostedDate } = req.body;
  console.log(req.body);
  const req_data = new careerDataModel({
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
  careerDataModel
    .findByIdAndRemove(id)
    .then(() => {
      res.send("Data Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
