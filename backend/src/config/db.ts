import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.set('debug', false);
mongoose.set('strictQuery', false);

const connectDB = async (): Promise<void> => {
   try {
      const connectionString: string = process.env.MONGO_URI || 'mongodb://localhost:27017/global';
      const conn = await mongoose.connect(connectionString);
      console.log(`MongoDB Connected with:`, conn.connection.db.namespace);
   } catch (error: any) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
   }
};

export default connectDB;
