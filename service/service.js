const { connectToDatabase } = require("../connect");

const fetchTimeline = async (deviceId) => {
  try {
    const db = await connectToDatabase();
    const data = await db.collection("timeline").find().toArray().limit(20);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchTimeline,
};
