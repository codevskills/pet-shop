const router = require("express").Router();

router.post("/req-post", async (req, res) => {
  const { title, description, price, reqPostedDate } = req.body;
  console.log(req.body);
  const req_data = new userDataModel({
    reqRole,
    reqId,
    reqLocation,
    reqPostedDate
  });

  await req_data.save();
  res.send("Data posted: ");
});

module.exports = router;
