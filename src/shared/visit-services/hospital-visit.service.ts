import { Injectable } from '@angular/core';

@Injectable()
export class HospitalVisitService {
    getHospital() {
        let list: any = [
                            {id:"1", value: "בית חולים אברבנאל"},
                            {id:"2", value: "בית חולים אוגוסטה ויקטוריה"},
                            {id:"3", value: "בית חולים איטלקי"},
                            {id:"4", value: "בית חולים איכילוב סוראסקי"},
                            {id:"5", value: "בית חולים אילנות"},
                            {id:"6", value: "בית חולים איתנים"},
                            {id:"7", value: "בית חולים אל מקאסד"},
                            {id:"8", value: "בית חולים אלישע בלומנטל"},
                            {id:"9", value: "בית חולים אסותא באר שבע"},
                            {id:"10", value: "בית חולים אסותא חיפה"},
                            {id:"11", value: "בית חולים אסותא ראשון לציון"},
                            {id:"12", value: "בית חולים אסותא תל אביב (רמת החיל)"},
                            {id:"13", value: "בית חולים אסף הרופא"},
                            {id:"14", value: "בית חולים ביקור חולים"},
                            {id:"15", value: "בית חולים בית בלב -נשר"},
                            {id:"16", value: "בית חולים בית בלב-בת ים"},
                            {id:"17", value: "בית חולים בית בלב-גני עומר"},
                            {id:"18", value: "בית חולים בית לוינשטיין"},
                            {id:"19", value: "בית חולים בית-הדר"},
                            {id:"20", value: "בית חולים בלינסון רבין קרית"},
                            {id:"21", value: "בית חולים בני ציון-רוטשילד"},
                            {id:"22", value: "בית חולים ברזילי"},
                            {id:"23", value: "בית חולים גהה"},
                            {id:"24", value: "בית חולים גלר"},
                            {id:"25", value: "בית חולים הדסה הר הצופים"},
                            {id:"26", value: "בית חולים הדסה עין כרם"},
                            {id:"27", value: "בית חולים הוד אדומים"},
                            {id:"28", value: "בית חולים החלמה ונופש-נתניה"},
                            {id:"29", value: "בית חולים הכרמל"},
                            {id:"30", value: "בית חולים הלל יפה"},
                            {id:"31", value: "בית חולים המרכזי בעמק"},
                            {id:"32", value: "בית חולים המשפחה הקדושה"},
                            {id:"33", value: "בית חולים הסקוטי"},
                            {id:"34", value: "בית חולים הרצוג"},
                            {id:"35", value: "בית חולים הרצפלד"},
                            {id:"36", value: "בית חולים השרון ק. גולדה"},
                            {id:"37", value: "בית חולים וולפסון"},
                            {id:"38", value: "בית חולים זיו"},
                            {id:"39", value: "בית חולים טלביה"},
                            {id:"40", value: "בית חולים יוספטל"},
                            {id:"41", value: "בית חולים כפר שאול"},
                            {id:"42", value: "בית חולים לניאדו"},
                            {id:"43", value: "בית חולים מ.ר.ב. מרכז רפואי"},
                            {id:"44", value: "בית חולים מ.רפואי הרצליה"},
                            {id:"45", value: "בית חולים מאיר"},
                            {id:"46", value: "בית חולים מול הים"},
                            {id:"47", value: "בית חולים מלבן נתניה"},
                            {id:"48", value: "בית חולים מעייני הישועה"},
                            {id:"49", value: "בית חולים מרכז רמת גן לאלצהיימר"},
                            {id:"50", value: "בית חולים מרכז רפואי חורב"},
                            {id:"51", value: "בית חולים משגב לדך"},
                            {id:"52", value: "בית חולים נאות השרון"},
                            {id:"53", value: "בית חולים נאות לגרדיה"},
                            {id:"54", value: "בית חולים נהריה"},
                            {id:"55", value: "בית חולים נוה שבא"},
                            {id:"56", value: "בית חולים נווה יעקב"},
                            {id:"57", value: "בית חולים נווה עמית-רחובות"},
                            {id:"58", value: "בית חולים נווה שלווה"},
                            {id:"59", value: "בית חולים נוף הדר"},
                            {id:"60", value: "בית חולים סורוקה"},
                            {id:"61", value: "בית חולים סנט ג'והן"},
                            {id:"62", value: "בית חולים סנט ג'וזף"},
                            {id:"63", value: "בית חולים סנט וינסנט"},
                            {id:"64", value: "בית חולים סניטס"},
							{id:"65", value: "בית חולים עד 120 ראשל''צ"},
                            {id:"66", value: "בית חולים עמל ירושלים"},
                            {id:"67", value: "בית חולים פוריה"},
                            {id:"68", value: "בית חולים קפלן"},
							{id:"69", value: "בית חולים רמב''ם"},
                            {id:"70", value: "בית חולים רעות שיקום"},
                            {id:"71", value: "בית חולים שיבא  (תל השומר)"},
                            {id:"72", value: "בית חולים שלוותה"},
                            {id:"73", value: "בית חולים שמואל הרופא"},
                            {id:"74", value: "בית חולים שערי צדק"},
                            {id:"75", value: "בית חולים/בית הבראה/החלמה"},
                            {id:"76", value: "בית מרפא גנים"},
                            {id:"77", value: "הוספיס תל השומר"},
                            {id:"78", value: "הוספיס-כללי"},
                            {id:"79", value: "המרכז לבריאות הנפש באר-יעקב"},
                            {id:"80", value: "המרכז לבריאות הנפש באר-שבע"},
                            {id:"81", value: "המרכז לבריאות הנפש טירת-הכרמל"},
                            {id:"82", value: "המרכז לבריאות הנפש לב-השרון"},
                            {id:"83", value: "המרכז לבריאות הנפש מזרע"},
                            {id:"84", value: "המרכז לבריאות הנפש שער-מנשה"},
                            {id:"85", value: "לא לשימוש!!!"},
                            {id:"86", value: "מעונות מכבי-תל השומר"},
                            {id:"87", value: "מרכז גריאטרי בית רבקה"},
                            {id:"88", value: "מרכז גריאטרי משולב ע''ש שוהם"},
                            {id:"89", value: "מרכז גריאטרי נאות התיכון"},
                            {id:"90", value: "מרכז גריאטרי נתניה"},
                            {id:"91", value: "מרכז גריאטרי פלימן"},
                            {id:"92", value: "שיקום-בי''ח איכילוב"},
                            {id:"93", value: "שיקום-בי''ח העמק"},
                            {id:"94", value: "שיקום-בית חולים נהריה"},
        ];

        return list;
    }


    getDepartment() {
        let list: any = [
                            {id:"1", value: "א.א.ג."},
                            {id:"2", value: "אונקולוגית"},
                            {id:"3", value: "אורולוגית"},
                            {id:"4", value: "אורטופדית"},
                            {id:"5", value: "אורטופדית א'"},
                            {id:"6", value: "אורטופדית ב'"},
                            {id:"7", value: "אורטופדית השתלות"},
                            {id:"8", value: "אף אוזן גרון"},
                            {id:"9", value: "גניקולוגית"},
                            {id:"10", value: "גריאטריה חריפה/תת-חריפה"},
                            {id:"11", value: "גריאטריה שיקומית"},
                            {id:"12", value: "גריאטרית"},
                            {id:"13", value: "גריאטרית חריפה/תת-חריפה"},
                            {id:"14", value: "המטולוגית"},
                            {id:"15", value: "טיפול נמרץ"},
                            {id:"16", value: "טיפול נמרץ לב"},
                            {id:"17", value: "כירורגית"},
                            {id:"18", value: "כירורגית א'"},
                            {id:"19", value: "כירורגית ב'"},
                            {id:"20", value: "כירוררגית"},
                            {id:"21", value: "כלי-דם"},
                            {id:"22", value: "מחלקה פנימית"},
                            {id:"23", value: "נוירוכירורגית"},
                            {id:"24", value: "נוירולוגית"},
                            {id:"25", value: "ניתוחי לב"},
                            {id:"26", value: "נפרולוגית"},
                            {id:"27", value: "נשים א'"},
                            {id:"28", value: "נשים ב'"},
                            {id:"29", value: "סיעודי מורכב"},
                            {id:"30", value: "סיעודי מורכב (לא בהסכם)"},
                            {id:"31", value: "סיעודים ותשושים"},
                            {id:"32", value: "עיניים"},
                            {id:"33", value: "פלסטיקה"},
                            {id:"34", value: "פנימית"},
                            {id:"35", value: "פנימית א"},
                            {id:"36", value: "פנימית א'"},
                            {id:"37", value: "פנימית ב'"},
                            {id:"38", value: "פנימית ג'"},
                            {id:"39", value: "פנימית ד'"},
                            {id:"40", value: "פנימית ה'"},
                            {id:"41", value: "פנימית ו'"},
                            {id:"42", value: "פנימית ז'"},
                            {id:"43", value: "פנימית ח'"},
                            {id:"44", value: "פנימית ט'"},
                            {id:"45", value: "פנימית י'"},
                            {id:"46", value: "קרדיולוגית"},
                            {id:"47", value: "שיקום"},
     ];

        return list;
    }
}