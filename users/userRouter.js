const express = require("express");

const router = express.Router();

const validateUserId = require(`../api/middleware/validateUserId`);

const db = require(`./userDb`);

const errorMessage = (res, status, msg, error) => {
  console.error(msg, error);
  res.status(status).json({ errorMessage: msg });
};

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", validateUserId, (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
  db.get()
    .then(users => res.status(200).json(users))
    .catch(error =>
      errorMessage(res, 500, `Error getting users from the database`, error)
    );
});

router.get("/:id", validateUserId, (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.get("/:id/posts", validateUserId, (req, res) => {
  // do your magic!
  db.getUserPosts(req.user.id)
    .then(posts => res.status(200).json(posts))
    .catch(error =>
      errorMessage(
        res,
        500,
        `Error getting users posts from the database`,
        error
      )
    );
});

router.delete("/:id", validateUserId, (req, res) => {
  // do your magic!
});

router.put("/:id", validateUserId, (req, res) => {
  // do your magic!
});

module.exports = router;
