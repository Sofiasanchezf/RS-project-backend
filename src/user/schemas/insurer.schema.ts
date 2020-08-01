import * as mongoose from 'mongoose';

export const insurerSchema = new mongoose.Schema({
    cardNumber: String,
    name: String,
    type: String
});