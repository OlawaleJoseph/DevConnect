import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let URI;
if (process.env.NODE_ENV === 'PRODUCTION') {
  URI = process.env.DATABASE_URI;
} else if (process.env.NODE_ENV === 'TEST') {
  URI = process.env.TEST_DB_URI;
} else {
  URI = process.env.DEV_DB_URI;
}
const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
