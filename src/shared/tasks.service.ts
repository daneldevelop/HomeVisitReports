import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
export class TasksService  extends  BaseService {
   //private baseUrl = "https://homevisitorganizermobile.firebaseio.com/";
     private serverUrl = `${this.UrlBase}/api/Organizer`;


   response: any;
   responseTask : any;
   currentTask: any = {};

    constructor(public http: Http) {
        super();
    }
   
    getTasks(token) {
      return new Promise(resolve => {
      let url = `${this.serverUrl}/GetTasks?token=${token}`; 
       this.http.get(url)
       .map(res => res.json())
       .subscribe(data => {
        this.response = data;
        resolve(this.response);
    });
    });
    }
   
    // getTasks() {
    //     return this.http.get(`${this.baseUrl}.json`).map((res:Response) => {
    //       let data = res.json();
    //         if(data.SuccessStatus == 1)
    //             {
    //             return data.Result;
    //             }
    //         else{
    //            console.log(data.FailureMessage);
    //         }
    //     });
    // }
    
    getTaskData(token,accountId) {
      return new Promise(resolve => {
            let url = `${this.serverUrl}/GetTask?token=${token}&accountId=${accountId}`; 
            this.http.get(url)
            .map(res => res.json())
            .subscribe(data => {
            this.responseTask = data;
            resolve(this.responseTask);
        });
    });
    }
    
    // getTaskData(clientId) {
    //     let url = `${this.baseUrl}/Result/.json?AccountIdNumber=${clientId}`;
    //     return this.http.get(`${this.baseUrl}/Result/.json?AccountIdNumber=${clientId}`).map((res:Response) => {
    //         this.currentTask = res.json();
    //         return this.currentTask;
    //     });
    // }
}