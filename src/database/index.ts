import mongoose from 'mongoose';
import { config } from 'dotenv';
import DTE from 'dotenv-expand';

DTE(config());

mongoose.connect(process.env.URL_DATABASE);

mongoose.Promise = global.Promise;

export default mongoose;
