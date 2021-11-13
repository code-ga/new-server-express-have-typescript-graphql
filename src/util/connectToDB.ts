// connect to mongodb
import mongoose from "mongoose";
var connectToDB = async (url: string) => {
  try {
      await mongoose.connect(url, {
          // connect to mongodb options
      });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};
export default connectToDB;