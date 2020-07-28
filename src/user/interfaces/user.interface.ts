import { Document } from 'mongoose';
import { Patient } from './patient.interface';
import { Professional } from './professional.interface';
import { Address } from './address.interface';

export interface User extends Document {
    patient?: Patient;
    professional?: Professional;
    name: string;
    lastName: string;
    secondLastName?: string;
    gender?: string;
    birthDate?: string;
    nif?: string;
    address?: Address;
}