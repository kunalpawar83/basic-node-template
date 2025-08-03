const express = require("express");
const { infocontroller } = require("../../controllers/index.js");
const router = express.Router();

router.get("/info", infocontroller.info);

module.exports = router;
