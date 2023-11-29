const express = require("express");
const { getTimeline, testApi } = require("../controller/controller");

const router = express.Router();

router.get("/timeline/:deviceId", getTimeline);
router.get("/", testApi);

module.exports = router;
