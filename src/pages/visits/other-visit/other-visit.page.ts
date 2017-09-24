import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrmService } from '../../../shared/shared';
import { OtherVisit } from '../../../models/models';
import { VisitPage } from "../../pages";

@Component ({
    selector: 'page-other-visit',
    templateUrl: './other-visit.page.html'
})
export class OtherVisitPage {
    visitType: string;
    clientName: string;
    AccountId: string;
    Token: string;
    submitAttempt: boolean = false;
   
    otherForm: FormGroup;
    
    @ViewChild('myVisitPage') visitPage: VisitPage;
    AccountDescription: number;
    VisitDetails: string = '';

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private crmService: CrmService,
                public formBuilder: FormBuilder) {
    this.otherForm = formBuilder.group({
         AccountDescription: [''],
         VisitDetails: [],
        });
    }

    ionViewDidLoad() {
        this.visitType = this.navParams.data.visitType;
        this.clientName = this.navParams.data.clientName;
        this.AccountId = this.navParams.data.clientid;
        this.Token = this.navParams.data.Token;
    }

    saveOther() {
       this.submitAttempt = true;
       if(!this.otherForm.valid || !this.visitPage.visitForm.valid ){
            console.log('not valid');
            return;
        } 
        else{
           console.log('good')
        } 

        let otherVisit = new OtherVisit();
        otherVisit.AccountDescriptionID = this.AccountDescription;
        otherVisit.VisitDetails = this.VisitDetails;

        this.crmService.notifyOther(otherVisit);
    }
}