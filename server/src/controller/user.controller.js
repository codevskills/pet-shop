const router = require("express").Router();
const userDataModel = require("../model/user.model");
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";

// Check user credentials and perform login
router.post("/normal-login", (req, res) => {
  const { username, password } = req.body;

  userDataModel
    .findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid username" });
      }

      if (password !== user.password) {
        return res.status(401).json({ error: "Invalid password" });
      }

      return res.status(200).json({ message: "Login successful" });
    })
    .catch((err) => res.status(500).json({ error: "Internal server error" }));
});
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  userDataModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new userDataModel({
          name,
          email,
          password
        });
        newUser
          .save()
          .then(() => {
            res.send({ message: "Successfully registered" });
          })
          .catch((err) => {
            console.log(err);
            res.send({ message: "An error occurred" });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "An error occurred" });
    });
});
//  ------------ get data of user by admin controller-----------
router.get("/getuser", async (req, res) => {
  try {
    const data = await userDataModel.find({}).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});
//  ------------delete user by admin controller-----------
router.delete("/:id", async (req, res) => {
  userDataModel
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("user deleted");
    })
    .catch((err) => {
      res.send("An error Occured");
    });
});

// --------------------Login----------------------------//

router.get("/login/success", (req, res) => {
  if (req.user) {
    // console.log(req.user)
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error(err);
    }
    res.redirect(CLIENT_URL);
  });
});

//  --- google  --

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

// --------------------github----------------------------//
router.get(
  "/github",
  passport.authenticate("github", { scope: ["profile", "user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

// --------------------facebook----------------------------//

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

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

router.post("/user/add", async (req, res) => {
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

// Changes

module.exports = router;
