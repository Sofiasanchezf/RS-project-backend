import * as mongoose from 'mongoose';
import { addressSchema } from './address.schema';
import { patientSchema } from './patient.schema';
import { professionalSchema } from './professional.schema';


export const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    secondLastName: String,
    gender: String,
    birthDate: String,
    nif: String,
    address: { type: addressSchema },
    patient: { type: patientSchema },
    professional: { type: professionalSchema}
});