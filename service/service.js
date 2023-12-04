const { connectToDatabase } = require("../connect");

const fetchTimeline = async (deviceId, date) => {
  try {
    const db = await connectToDatabase();
    const timestampDate = new Date(date);
    const startOfDay = new Date(timestampDate.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(timestampDate.setUTCHours(23, 59, 59, 999));
    const cursor = await db
      .collection("timeline")
      .find({
        deviceId: deviceId,
        timestamp: { $gte: startOfDay.getTime(), $lte: endOfDay.getTime() },
      })
      .limit(20);
    const data = await cursor.toArray();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchDevices = async () => {
  try {
    const db = await connectToDatabase();
    const cursor = await db
      .collection("devices")
      .find()
      .sort({ timestamp: -1 })
      .limit(20);
    const data = cursor.toArray();
    return data;
  } catch (error) {
    console.log("error :>> ", error);
    throw error;
  }
};

const findDevices = async (query) => {
  try {
    const db = await connectToDatabase();
    const cursor = await db
      .collection("devices")
      .find({ deviceId: { $regex: query, $options: "i" } })
      .limit(20);
    const data = await cursor.toArray();
    return data;
  } catch (error) {
    console.log("error in service :>> ", error);
  }
};

module.exports = {
  fetchTimeline,
  fetchDevices,
  findDevices,
};
