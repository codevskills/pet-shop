const router = require("express").Router();
const adDataModal = require("../model/ad.model");

// post

router.post("/ad-post", async (req, res) => {
  const {
    adTitle,
    description,
    price,
    country,
    state,
    city,
    nearby,
    phoneNo,
    photo
  } = req.body;
  console.log(req.body);
  const ad_data = new adDataModal({
    adTitle,
    description,
    price,
    country,
    state,
    city,
    nearby,
    phoneNo,
    photo
  });

  await ad_data.save();
  res.send("Data posted: ");
});

// update
router.put("/ad-update/:id", async (req, res) => {
  const id = req.params.id;
  const {
    adTitle,
    description,
    price,
    country,
    state,
    city,
    nearby,
    phoneNo,
    photo
  } = req.body;
  productDataModel
    .findByIdAndUpdate(id, {
      adTitle,
      description,
      price,
      country,
      state,
      city,
      nearby,
      phoneNo,
      photo
    })
    .then(() => {
      res.send("Data Updated");
    })
    .catch((err) => {
      res.send(err);
    });
});

/* User Manipulation */
// get all

router.get("/ad-get", async (req, res) => {
  const data = await adDataModal.find();
  res.send(data);
});

// delete
router.delete("/ad-delete/:id", async (req, res) => {
  const id = req.params.id;
  adDataModal
    .findByIdAndRemove(id)
    .then(() => {
      res.send("Data Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

// Get Unique data by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const find_one = await adDataModal.findById(id);
    res.send(find_one);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
