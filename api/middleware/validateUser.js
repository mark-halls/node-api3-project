const validateUser = (req, res, next) => {
  const userBody = req.body;
  if (!userBody) {
    res.status(400).json({ message: "missing user data" });
  } else if (userBody && !userBody.name) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    next();
  }
};

module.exports = validateUser;
