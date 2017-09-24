import { Injectable } from '@angular/core';

@Injectable()
export class FirstVisitService {
    getZeroOrOne() {
        let list: any = [
            { id: "1", value: "0" },
            { id: "2", value: "0.5" },
        ];

        return list;
    }

     getPreAssessmentFalling(){
      let list: any = [
            { id: "1", value: "ללא נפילות - 0" },
            { id: "2", value: "נפילה שלוש פעמים בשלושה חודשים אחרונים - לא קימה לבד - 0.5" },
			{ id: "3", value: "נפילה 2-3 פעמים בחודש האחרון- ללא קימה לבד 1.5" },
        ];

        return list;
    }

    getPreAssessmentDressing(){
      let list: any = [
            { id: "1", value: "עצמאי בהלבשה - 0" },
            { id: "2", value: "זקוק/ה לעזרה מועטה בהלבשת פלג גוף עליון/תחתון - 0.5" },
			{ id: "3", value: "זקוק/ה לעזרה מלאה או רבה בהלבשת פלג גוף עליון/תחתון - 1" },
			{ id: "4", value: "מסרב/ת להחליף בגדים עקב בעיות בתובנה - 1" }
        ];

        return list;
    }
	
	getPrePreAssessmentBathing(){
      let list: any = [
            { id: "1", value: "עצמאי רחצה - 0" },
            { id: "2", value: "זקוק לסיוע קל בהכנת תנאי רחצה/השגחה/חפיפה - 0.5" },
			{ id: "3", value: "זקוק/ה לעזרה פעילה בחלק מפעולות הרחצה כולל אזורים אינטימיים - 1" },
			{ id: "4", value: "זקוק/ה לעזרה מלאה בכל פעולות הרחצה/ מסרב בשל אי תובנה - 1.5" }
        ];

        return list;
    }
	
	getPreAssessmentDrinkeat(){
      let list: any = [
            { id: "1", value: "עצמאי באכילה ושתיה - 0" },
            { id: "2", value: "זקוק/ה לסיוע באכילה או בלקיחת תרופות/ סיוע חימום והגשת מזון - 0.5" },
			{ id: "3", value: "זקוק/ה לעזרה חלקית באכילה או בשתייה - 1" },
			{ id: "4", value: "מסרב/ת לאכול עקב בעיות תובנה וזקוק/ה לעזרה - 1" },
			{ id: "5", value: "זקוק/ה להאכלה מלאה (זונדה, פאג) - 1.5" }
        ];

        return list;
    }
	
	getPreAssessmentSevretions(){
      let list: any = [
            { id: "1", value: "שולט בסוגריים - 0" },
            { id: "2", value: "משתמש/ת בשירותים או סיר וזקוק/ה לעזרה מועטה/ בריחת שתן לפחות 3 פעמים ביום - 0.5" },
			{ id: "3", value: "זקוק/ה לעזרה בניידות הלבשה וטיפול בהפרשות ביום - 1" },
			{ id: "4", value: "זקוק/ה לעזרה בניידות הלבשה וטיפול בהפרשות + זקוק/ה לסיוע בלילה- 1.5" },
		    { id: "5", value: "לא שליטה באחד הסוגרים, אינו מטפל/ת בעצמו/ה, ותלוי/ה לחלוטין בעזרת הזולת - 2" },
		    { id: "6", value: "ללא שליטה בשני הסוגרים, לא מטפל/ת בעצמו/ה או אינו/ה מסוגל/ת עקב חוסר תובנה - 7" }
        ];

        return list;
    }
	
	getPreAssessmentSight(){
      let list: any = [
            { id: "1", value: "ראייה תקינה - 0" },
            { id: "2", value: "עיוור בודד - בעל תעודת עיוור/ אסמכתא רפואית - מקבל זכאות אוטומטי (עיוור שגר עם בת זוג/בן הזוג הזכאי לחו''ס/שר''מ - יחשב כבודד) - 2" },
			{ id: "3", value: "עיוור (המאובחן כסובל מ - 90% עיוורון) המתגורר עם בן הזוג - 0.5" }
        ];

        return list;
    }
	
	getPreAssessmentDementia(){
      let list: any = [
            { id: "1", value: "צלול/מתמצא בזמן ובמקום - 0" },
            { id: "2", value: "אבחנת פסיכוגריאטר והתרשמות אחות בביקור הבית לא תתבצע בדיקת תלות - זכאות אוטומטית ל 168% גמלה - 9" }
        ];

        return list;
    }
	
	getPreAssessmentTotallyenthralled(){
      let list: any = [
            { id: "1", value: "עצמאי - 0" },
            { id: "2", value: "לא תתבצע בדיקת תלות - זכאות אוטומטית 150% גמלה - 7" }
        ];
		
        return list;
    }

    getPreAssessmentObservation(){
        let list: any = [
            { id: "1", value: "לא נדרשת השגחה - 0" },
            { id: "2", value: " שלוש פעמים ביום - 4 ADL קשיש הזקוק לדרבון קל ב" },
			{ id: "3", value: "השגחה מלאה: מסכן את עצמו/אחרים כאשר נשאר לבד (דמנציה וכד') נדרש מכתב רפואי - 9" }
        ];
		
        return list;
    }
}