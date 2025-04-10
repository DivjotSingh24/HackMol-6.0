import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);

    const connection = mongoose.connection;
    connection.on(
      "error",
      console.error.bind(console, "MongoDB connection error:")
    );
    connection.once("open", () => {
      console.log("Connected to MongoDB Atlas");
    });
  } catch (error) {
    console.error("MONGODB Connection error", error);
  }
};

export default connectDB;
