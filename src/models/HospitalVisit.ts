import { VisitBase } from './VisitBase';

export class HospitalVisit extends VisitBase {
    AccountDescription: string;
    Hospital: number;
    Department: number;
    WardNumber: string;
    RoomNumber: string;
    IsClientKnowAnother: boolean;
}