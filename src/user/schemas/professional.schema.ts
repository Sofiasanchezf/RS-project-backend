import * as mongoose from 'mongoose';

export const professionalSchema = new mongoose.Schema({
    medicalBoardNumber: String,
    professionalType: String,
});

// module.exports = mongoose.model('Professional', professionalSchema);
