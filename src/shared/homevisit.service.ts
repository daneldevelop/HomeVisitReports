import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
export class HomeVisitService  extends  BaseService {
  private baseUrl = `${this.UrlBase}/api/Organizer`;
   private url :string;
   private headers: Headers = new Headers();
   response: any;

    constructor(public http: Http) {
        super();
         this.headers.append('Content-Type', 'application/json');
         this.headers.append('Accept', 'application/json');
    }

    postHomeVisit(visitObj,visitType) {
           switch(visitType)
            {
                 case "ביקור בית שגרתי":
                    this.url = `${this.baseUrl}/SaveRoutineReport`;
                 break;
                 case "ביקור בית השמה":
                    this.url = `${this.baseUrl}/SaveAssigningReport`;
                 break;
                 case "ביקור בית אחר":
                     this.url = `${this.baseUrl}/SaveOtherReport`;
                 break;
                 case "ביקור בית חולים":
                     this.url = `${this.baseUrl}/SaveHospitalReport`;
                 break;
                 case "ביקור בית ראשוני":
                     this.url = `${this.baseUrl}/SaveRoutineInitial`;
                 break;
            };
            return new Promise(resolve => {
            this.http.post(this.url,JSON.stringify(visitObj),{headers:this.headers})
            .map(res => res.json)
            .subscribe(data => {
            this.response = data;
            resolve(this.response);
        });
     });
    }

}