import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb+srv://apolorezende:wSEt51ZDiKZaryxs@cluster0.0kon5ph.mongodb.net/';

const connectToDatabase = (
  mongoDatabaseURI = MONGO_DB_URL,
) =>  mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;