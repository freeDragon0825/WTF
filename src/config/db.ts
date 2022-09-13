import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const mongoOption = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    const conn = await mongoose.connect(
      <string>process.env.MONGO_URI,
      <ConnectOptions>mongoOption,
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('MongoDB connection failed.');
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
