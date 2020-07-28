import { AddressDto } from "./address.dto";
import { ProfessionalDto } from "./professional.dto";
import { PatientDto } from "./patient.dto";

export class UserDto {
    _id: string;
    patient?: PatientDto;
    professional?: ProfessionalDto;
    name: string;
    lastName: string;
    secondLastName?: string;
    gender?: string;
    birthDate?: string;
    nif?: string;
    address?: AddressDto;
}