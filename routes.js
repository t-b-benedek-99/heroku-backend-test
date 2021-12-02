const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.json(todos);
});

router.post("/parent-verified", function(req, res) {
  res.json(req.body);
});

module.exports = router;
