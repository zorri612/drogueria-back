import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting...");

    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.MONGO_URI as string, {
      serverSelectionTimeoutMS: 5000,
      family: 4
    });

    console.log("Mongo conectado");

  } catch (error) {
    console.error("ERROR MONGO:");
    console.error(error);
    process.exit(1);
  }
};