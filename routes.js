const express = require('express');
const fs = require("fs");

const router = express.Router();

router.post("/parent-verified", (req, res) => {
  res.json(req.body);

  fs.writeFile( "filename.json", JSON.stringify( req.body ), "utf8", () => {
    console.log("IO performed");
  });

  delete require.cache[require.resolve('./filename.json')]
});

router.get("/parents-verified", (req, res) => {
  let myJson = require("./filename.json");
  res.json(myJson);
});

module.exports = router;
