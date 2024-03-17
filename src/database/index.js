import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    await mongoose.connect();
  } catch (error) {}
}
