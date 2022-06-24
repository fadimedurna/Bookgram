const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated.");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//ranking
router.put("/:id/rank", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.rank.includes(req.body.userId)) {
      await post.updateOne({ $push: { rank: req.body.userId } });
      res.status(200).json("The post has been ranked");
    } else {
      await post.updateOne({ $pull: { rank: req.body.userId } });
      res.status(200).json("Rank withdrawn");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//objection
router.put("/:id/object", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.object.includes(req.body.userId)) {
      await post.updateOne({ $push: { object: req.body.userId } });
      res.status(200).json("The post has been objected");
    } else {
      await post.updateOne({ $pull: { object: req.body.userId } });
      res.status(200).json("Objection withdrawn");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.member.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
