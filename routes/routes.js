const express = require("express");
const {
  getTimeline,
  testApi,
  getAllDevices,
  searchDevice,
} = require("../controller/controller");

const router = express.Router();

router.post("/devices/find", searchDevice);
router.get("/timeline/:deviceId/:date", getTimeline);
router.get("/devices/", getAllDevices);
router.get("/", testApi);


module.exports = router;
