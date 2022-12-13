import mongoose from "mongoose";

export const connectDB = () => {
  try {
    
    const conn = mongoose.connect(process.env.MONGO_CLIENT);

    conn
      ? console.log("Mongo Connected")
      : console.log("Unable to connect Mongo");
  } catch (error) {
    console.log(error);
  }
};
