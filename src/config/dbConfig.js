import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connStr = "mongodb://localhost:27017/aug_transaction";
    const conn = mongoose.connect(connStr);

    conn
      ? console.log("Mongo Connected")
      : console.log("Unable to connect Mongo");
  } catch (error) {
    console.log(error);
  }
};
