import * as mongoose from 'mongoose';

export const addressSchema = new mongoose.Schema({
    street: String,
    number: String,
    door: String,
    postalCode: String,
    city: String,
});
