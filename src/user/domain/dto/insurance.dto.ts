export type insuranceType = '' | 'Health' | 'Family' | 'Dental';

export class InsuranceDto {
    cardNumber: string;
    name: string;
    type: insuranceType;
}