const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ MongoDB connected");
      console.log("📦 Connected database:", mongoose.connection.name);
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err.message);
    });
}

module.exports = connectDB;
