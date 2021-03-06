const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const path = require('path')

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

/* app.get("/", (req, res) => {
  res.send("welcome to homepage");
}); */

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.use(express.static(path.join(__dirname, "/client/build")));
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'/client/build','index.html'));
})
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
