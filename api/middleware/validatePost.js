const validatePost = (req, res, next) => {
  const postBody = req.body;

  if (!postBody) {
    res.status(400).json({ message: "missing post data" });
  }
  if (postBody && !postBody.text) {
    res.status(400).json({ message: "missing required text field" });
  }
  next();
};

module.exports = validatePost;
