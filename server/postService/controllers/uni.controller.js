const { title } = require("process");
const db = require("../models");
const UniPost = db.uni;

exports.getPostByNameAndCategory = (req, res) => {
  console.log(UniPost);
  return UniPost.find({
    name: req.params.name, category: req.params.category
  }).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(404).send("Posts not available!")
  });
  // UniPost.find({
  //   "name": req.params.name
  // }).then((result) => {
  //   res.status(200).send(result);
  // }).catch((err) => {
  //   res.status(404).send("Posts not available!")
  // });
};

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
