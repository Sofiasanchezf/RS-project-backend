import * as mongoose from 'mongoose';
import { insurerSchema } from './insurer.schema';

export const patientSchema = new mongoose.Schema({
    nhc: String,
    insuranceList: Array,
});
