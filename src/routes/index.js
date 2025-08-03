const express = require("express");
const router = express.Router();
const v1router = require("./V1/index.js");

router.use("/v1", v1router);

module.exports = router;
