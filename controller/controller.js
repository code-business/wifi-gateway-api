const { fetchTimeline } = require("../service/service");

const getTimeline = async (req, res) => {
  try {
    const deviceId = req.params.deviceId;
    const data = fetchTimeline(deviceId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getTimeline,
};
