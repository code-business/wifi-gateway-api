const { connectToDatabase } = require("../connect");

const fetchTimeline = async (deviceId) => {
  try {
    const db = await connectToDatabase();
    const cursor = await db
      .collection("timeline")
      .find({ deviceId: deviceId })
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
    const cursor = await db.collection("devices").find().limit(20);
    const data = cursor.toArray();
    return data;
  } catch (error) {
    console.log("error :>> ", error);
    throw error;
  }
};

module.exports = {
  fetchTimeline,
  fetchDevices,
};
