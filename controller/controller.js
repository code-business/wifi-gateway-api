const { fetchTimeline, fetchDevices } = require("../service/service");
const testApi = async (req, res) => {
  try {
    res.status(201).json({ message: "API is Live" });
  } catch (error) {
    console.error("Error in createTimeline:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getTimeline = async (req, res) => {
  try {
    const deviceId = req.params.deviceId;
    const timeline = await fetchTimeline(deviceId);
    res.status(200).json(timeline);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllDevices = async (req, res) => {
  try {
    const devices = await fetchDevices();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getTimeline,
  testApi,
  getAllDevices,
};
