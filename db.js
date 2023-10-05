import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB Successful.");
  } catch (error) {
    throw new Error("Error in connecting to mongoDB.");
  }
};
export default connect;
