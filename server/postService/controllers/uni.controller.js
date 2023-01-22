const { title } = require("process");
const db = require("../models");
const UniPost = db.uni;

exports.getPostByNameAndCategory = (req, res) => {
  return UniPost.find({
    name: req.params.name, category: req.params.category
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
    category: req.body.category,
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

exports.changeVote = async (req, res) => {
  try {
    return UniPost.findAndModify({
      query: {__id: req.params.id},
      update: { $inc: { vote: 1 } }
    })
  } catch (err) {
    res.status(404).error(err);
  }
}
