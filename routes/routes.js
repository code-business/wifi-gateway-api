const express = require("express");
const {
  getTimeline,
  testApi,
  getAllDevices,
} = require("../controller/controller");

const router = express.Router();

router.get("/timeline/:deviceId", getTimeline);
router.get("/devices/", getAllDevices);
router.get("/", testApi);

module.exports = router;
