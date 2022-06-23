const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { route } = require("./users");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate encrypted password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user); //status 200: means it is succesfull
  } catch (err) {
    res.status(500).json(err);
  }
});

//test for db connection
/* router.get("/register", async (req, res) => {
  const user = await new User({
    username: "fd",
    email: "fd@gmail.com",
    password: "fdfdfd",
  });

  await user.save();
  res.send("it send!!");
}); */

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //wrong email
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found!");

    //wrong password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password"); //status 400: bad request

    //entering valid email & password
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//testing route
/* router.get("/", (req, res) => {
  res.send("hey its auth router");
}); */

module.exports = router;
