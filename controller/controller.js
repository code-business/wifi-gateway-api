const {
  fetchTimeline,
  fetchDevices,
  findDevices,
} = require("../service/service");
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
    const date = req.params.date;
    const timeline = await fetchTimeline(deviceId, date);
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

const searchDevice = async (req, res) => {
  const query = req.body.input;
  try {
    const devices = await findDevices(query);
    if (devices.length === 0) {
      res.status(201).json("No Devices Found");
    } else {
      res.status(200).json(devices);
    }
  } catch (error) {
    console.log({ error });
  }
};

module.exports = {
  getTimeline,
  testApi,
  getAllDevices,
  searchDevice,
};
