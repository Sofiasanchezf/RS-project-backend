export type professional = 'Doctor' | 'Nurse' | 'Administrative' | '';

export class ProfessionalDto {
    medicalBoardNumber: string;
    professionalType?: professional;
}