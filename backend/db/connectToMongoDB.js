import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("successfully connected to mongoDB");
  } catch (error) {
    console.log("Error connect to mongoDB", err.message);
  }
};

export default connectToMongoDB;