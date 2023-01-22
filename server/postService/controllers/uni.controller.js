const { title } = require("process");
const db = require("../models");
const UniPost = db.uni;

exports.getPostByNameAndCategory = (req, res) => {
  return UniPost.find({
    name: req.params.name, category: req.params.category.toLowerCase()
  }).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(404).send("Posts not available!")
  });
};

exports.findPost = (req, res) => {
  console.log(req.params.search);
  return UniPost.find({
    $or: [{title: {$regex : req.params.search}}, {description: {$regex : req.params.search}}]
  }).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(404).send("No posts available with this word")
  });
}

exports.createPost = (req, res) => {
  const post = new UniPost({
    name: req.body.name,
    category: req.body.category.toLowerCase(),
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    date: req.body.date,
    email: req.body.email,
  });

  console.log(post);

  post.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Post was created successfully!" });
  })
};

exports.upVote = async (req, res) => {
  let flag = 1;
  if (!req.body.vflag) flag = -1
  try {
    // Assuming title is unique
    const post = await UniPost.findOneAndUpdate({ title: req.body.title },
        { $inc: { votes: flag } },
        { new: true });
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.downVote = async (req, res) => {
  try {
    // Assuming title is unique
    const post = await UniPost.findOneAndUpdate({ title: req.body.title },
        { $inc: { votes: -1 } },
        { new: true });
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};