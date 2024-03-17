import mongoose from 'mongoose';

export default async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected successfully!');
  } catch (error) {
    console.log(error);
  }
}
