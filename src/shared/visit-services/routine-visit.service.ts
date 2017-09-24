import { Injectable } from '@angular/core';

@Injectable()
export class RoutineVisitService {
    getCleaningLevel() {
        let list: any = [
            { id: "1", value: "נקי" },
            { id: "2", value: "סביר" },
            { id: "3", value: "מוזנח" }
        ];

        return list;
    }

    getSmellLevel() {
        let list: any = [
            { id: "1", value: "נורמלי" },
            { id: "2", value: "מדיף ריח שתן" },
            { id: "3", value: "מדיף ריח רע" },
            { id: "4", value: "מסריח" }
        ];

        return list;
    }

    getVentelationLevel() {
        let list: any = [
            { id: "1", value: "נקי ומאוורר" },
            { id: "2", value: "נקי ולא מאוורר" },
            { id: "3", value: "נקי ומחניק" },
            { id: "4", value: "לא נקי" }
        ];

        return list;
    }

    getRoomCleaningLevel() {
        let list: any = [
            { id: "1", value: "נקי מסודר ומאוורר" },
            { id: "2", value: "לא נקי אך מאוורר" },
            { id: "3", value: "בחדר סורר אי סדר" },
            { id: "4", value: "מלוכלך מהפרשות" },
            { id: "5", value: "מחניק" }
        ];

        return list;
    }

    getKitchenCleaningLevel() {
        let list: any = [
            { id: "1", value: "נקי מסודר ומאוורר" },
            { id: "2", value: "מצוייד כהלכה" },
            { id: "3", value: "חסר באביזרים" },
            { id: "4", value: "מלוכלך" },
            { id: "5", value: "מוזנח" }
        ];

        return list;
    }

    getToiletLevel() {
        let list: any = [
            { id: "1", value: "נקיים" },
            { id: "2", value: "מוזנחים" },
            { id: "3", value: "מלוכלכים מהפרשות" }
        ];

        return list;
    }

    getBathroomLevel() {
        let list: any = [
            { id: "1", value: "נקי מסודר ומאוורר" },
            { id: "2", value: "מותאם למצב תפקודי" },
            { id: "3", value: "לא מותאם למצב תפקודי" },
            { id: "4", value: "חסר באביזרים" },
            { id: "5", value: "מלוכלך" },
            { id: "6", value: "מוזנח" }
        ];

        return list;
    }

    getAccessoriesMatchingLevel() {
        let list: any = [
            { id: "1", value: "מותאם למצב תפקודי" },
            { id: "2", value: "לא מותאם למצב תפקודי" }
        ];

        return list;
    }

    getIsSatisfactionFromNurseLevel() {
        let list: any = [
            { id: "1", value: "שבע רצון" },
            { id: "2", value: "שבע רצון באופן חלקי" },
            { id: "3", value: "אינו שבע רצון" },
            { id: "4", value: "ביקורתי" },
            { id: "5", value: "מבקש להחליף מטפל" }
        ];

        return list;
    }
}