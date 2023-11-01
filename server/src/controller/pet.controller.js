const router = require("express").Router();

const userDataModel = require("../model/user.model");

router.get("/req-get", async (req, res) => {
  const data = await userDataModel.find();
  res.send(data);
});

router.get("/req-get/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const find_one = await userDataModel.findById(id);
    res.send(find_one);
  } catch (err) {
    res.send(err);
  }
});

/* To Post a New Add by User */

router.post("/api/post/add", async (req, res) => {
  const {
    userId,
    userEmail,
    title,
    description,
    price,
    phoneNumber,
    location,
    photo,
    terms
  } = req.body;

  console.log("%%%%", req.body);
  // return;
  try {
    // Find the user by userId
    const user = await userDataModel.findOne({
      email: userEmail
    });

    console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found in database" });
    }

    // Create a new pet instance within the user's listings
    const newPet = {
      title,
      description,
      price,
      phoneNumber,
      location,
      // photo,
      terms,
      seller: user._id
    };

    // Append the new pet to the user's listings
    user.listings.push(newPet);

    // Save the updated user document
    await user.save();

    res.status(201).json(newPet); // Respond with the saved pet data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new post." });
  }
});

router.put("/update/:id", async (req, res) => {
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
