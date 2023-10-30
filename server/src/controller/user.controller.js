const router = require("express").Router();
const userDataModel = require("../model/user.model");

/* User Manipulation */

router.get("/req-get", async (req, res) => {
  const data = await userDataModel.find();
  res.send(data);
});

app.get("/req-get/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const find_one = await userDataModel.findById(id);
    res.send(find_one);
  } catch (err) {
    res.send(err);
  }
});

router.post("/req-post", async (req, res) => {
  const { reqRole, reqId, reqLocation, reqPostedDate } = req.body;
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

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { userName, email, phoneNumber, password, profileUrl } = req.body;
  console.log(req.body);
  try {
    await userDataModel.findByIdAndUpdate(id, {
      userName,
      email,
      phoneNumber,
      password,
      profileUrl
    });
    res.send("Data Updated");
  } catch (err) {
    res.send(err);
  }
});

router.delete("/req-delete/:id", async (req, res) => {
  const id = req.params.id;
  userDataModel
    .findByIdAndRemove(id)
    .then(() => {
      res.send("Data Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;