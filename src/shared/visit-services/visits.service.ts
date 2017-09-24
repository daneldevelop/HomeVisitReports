import { Injectable } from '@angular/core';

@Injectable()
export class VisitsService {
    getVisitCar() {
        let list: any = [
            { id: "1", value: "סניף" },
            { id: "2", value: "פרטי" },
            { id: "3", value: "ללא" }
        ];
        return list;
    }

    getExceptionReason(){
         let list: any = [
            { id: "1", value: "חג" },
            { id: "2", value: "היעדרות לקוח מקבל שירות" },
            { id: "3", value: "בוצע ביקור אחר" },
            { id: "4", value: "כוח עליון-שעת חירום" },
            { id: "5", value: "אילוצים תוך ארגונים- חופשת לידה עובדת סגל" },
            { id: "6", value: "אילוצים תוך ארגונים- חוסר צוות" },
            { id: "7", value: "חידוש שירות" }
        ];
        return list;
    }

    getEarlyReason(){
         let list: any = [
            { id: "1", value: "היערכות חופשות וחגים" },
            { id: "2", value: "(סידור עבודה באיזור(בני זוג,אחרים" },
            { id: "3", value: "התערבות איש סגל בגלל אירוע" },
            { id: "4", value: "השמה" },
            { id: "5", value: "חג" },
            { id: "6", value: "כוח עליון שעת חירום" }
        ];
        return list;
    }
}