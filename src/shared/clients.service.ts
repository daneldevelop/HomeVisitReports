import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ClientsService {
   private baseUrl = "https://homevisitorganizermobile.firebaseio.com/";
    currentClient: any = {};

    constructor(public http: Http) {}

    getClients() {
        return this.http.get(`${this.baseUrl}/clients.json`).map((res:Response) => {
            return res.json()
        });
    }

    getClientData(clientId) {
        return this.http.get(`${this.baseUrl}/clients_full/${clientId}.json`).map((res:Response) => {
            this.currentClient = res.json();
            return this.currentClient;
        });
    }
}