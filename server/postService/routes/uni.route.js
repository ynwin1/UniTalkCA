const controller = require("../controllers/uni.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //return all the posts from given university and category
  app.get(
    "/api/name/:name/category/:category",
    controller.getPostByNameAndCategory
  );

  //make a post
  app.post("/api/post", controller.createPost);

  //search for words within the given university's forum
  app.get("/api/name/:name/category/:category/:search", controller.findPost);
};