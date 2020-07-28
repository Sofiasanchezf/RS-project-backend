import * as mongoose from 'mongoose';

export const patientSchema = new mongoose.Schema({
    nhc: String,
    insuranceList: Array,
});

// module.exports = mongoose.model('Patient', patientSchema);