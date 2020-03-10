const validatePost = (req, res, next) => {
  const postBody = req.body;

  if (!postBody) {
    res.status(400).json({ message: "missing post data" });
  } else if (postBody && !postBody.text) {
    res.status(400).json({ message: "missing required text field" });
  } else {
    next();
  }
};

module.exports = validatePost;
