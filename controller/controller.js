const { fetchTimeline } = require("../service/service");
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
    // const data = await fetchTimeline(deviceId);
    // res.status(200).json(data);
    const dummyData = [
      {
        lat: "37.7749",
        lon: "-122.4194",
        timestamp: 1637736785000,
        steps: "500",
      },
      {
        lat: "40.7128",
        lon: "-74.0060",
        timestamp: 1637736790000,
        steps: "800",
      },
      {
        lat: "-33.8688",
        lon: "151.2093",
        timestamp: 1637736795000,
        steps: "1200",
      },
      {
        lat: "51.5074",
        lon: "-0.1278",
        timestamp: 1637736800000,
        steps: "600",
      },
      {
        lat: "35.6895",
        lon: "139.6917",
        timestamp: 1637736805000,
        steps: "1000",
      },
    ];

    res.status(200).json(dummyData);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getTimeline,
  testApi,
};
