const mongoose = require("mongoose");
const { dev } = require(".");

// connect mongodb database
exports.connectDB = async () => {
  try {
    await mongoose.connect(dev.db.url);
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
    console.log(error);
    process.exit(1);
  }
};
