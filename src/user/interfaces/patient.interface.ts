import { Insurance } from "./insurance.interface";

export interface Patient {
    nhc: string;
    insuranceList?: Insurance[];
}