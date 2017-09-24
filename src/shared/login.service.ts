import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';


@Injectable()
export class LoginService extends  BaseService {
     private baseUrl = `${this.UrlBase}/api/Organizer/ValidateUser`;
    response: any;

    constructor(public http: Http) {
        super();
    }

    getUserData(userName,password) {
        return new Promise(resolve => {
        let url = `${this.baseUrl}/ValidateUser?userName=${userName}&password=${password}`;
        this.http.get(url)
       .map(res => res.json())
       .subscribe(data => {
        this.response = data;
        resolve(this.response);
        });
    });
  }
}