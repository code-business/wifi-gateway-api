const express = require("express");
const { getTimeline } = require("../controller/controller");

const router = express.Router();

router.get("/:deviceId", getTimeline);

module.exports = router;
