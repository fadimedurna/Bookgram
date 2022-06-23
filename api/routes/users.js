const User = require("../models/User");
const Post = require("../models/Post");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted succesfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//member adding
router.put("/:id/member", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id); //gets id from url = user who gain member
      /* console.log(user); */
      const currentUser = await User.findById(req.body.userId); //gets id from json => user who choose to be member
      /* console.log(currentUser); */
      if (!user.member.includes(req.body.userId)) {
        await user.updateOne({ $push: { member: req.body.userId } });
        //await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("membership added!");
      } else if (user.member.includes(req.body.userId)) {
        await user.updateOne({ $pull: { member: req.body.userId } });
        res.status(200).json("membership withdrawn");
      } else {
        res.status(403).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't be member to yourself");
  }
});

//making objection to user
/* router.put("/:id/object", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id); //gets id from url = objectioned user
      const currentUser = await User.findById(req.body.userId); //gets id from json => user who made objection
      if (!user.object.includes(req.body.userId)) {
        await user.updateOne({ $push: { object: req.body.userId } });
        //await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("Objection made for user.");
      } else if (user.object.includes(req.body.userId)) {
        await user.updateOne({ $pull: { object: req.body.userId } });
        res.status(200).json("user objection withdrawn");
      } else {
        res.status(403).json("You already made objection for this user.");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can't make objection to yourself.");
  }
}); */

//testing route
/* router.get("/", (req, res) => {
  res.send("hey its user router");
}); */

module.exports = router;
