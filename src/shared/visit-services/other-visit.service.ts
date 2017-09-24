import { Injectable } from '@angular/core';

@Injectable()
export class OtherVisitService {
    getAccountDescription() {
        let list: any = [
            { id: "1", value: "אשפוז הזקן" },
            { id: "2", value: "היעדרות הזקן מהבית" },
            { id: "3", value: "ביקור הזקן במרכז יום\מועדון" },
            { id: "4", value: "היעדרות בין הבית המסייע בקשר עם הבקר" },
            { id: "5", value: "סירוב לפתוח דלת" },
            { id: "6", value: "סירוב לשתף פעולה עם הבקר" },
        ];

        return list;
    }
}