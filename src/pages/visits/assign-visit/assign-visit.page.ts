import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService } from '../../../shared/shared';
import { AssignVisit } from '../../../models/models';
import { VisitPage } from "../../pages";

@Component ({
    selector: 'page-assign-visit',
    templateUrl: './assign-visit.page.html'
})
export class AssignVisitPage {
    visitType: string;
    clientName: string;
    AccountId: string;
    Token: string;
    submitAttempt: boolean = false;
   
    assignForm: FormGroup;
    
    @ViewChild('myVisitPage') visitPage: VisitPage;
    IsClientKnowAnother: boolean;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private crmService: CrmService,
                public formBuilder: FormBuilder) {
                this.assignForm = formBuilder.group({
                IsClientKnowAnother: ['', Validators.required]
        });
    }

    ionViewDidLoad() {
        this.visitType = this.navParams.data.visitType;
        this.clientName = this.navParams.data.clientName;
        this.AccountId = this.navParams.data.clientid;
        this.Token = this.navParams.data.Token;
    }

    saveAssign() {
       this.submitAttempt = true;
       if(!this.assignForm.valid || !this.visitPage.visitForm.valid ){
            console.log('not valid')
            return;
        } 
        else{
           console.log('good')
        } 
        let assignVisit = new AssignVisit();
        assignVisit.IsClientKnowAnother = this.IsClientKnowAnother;

        this.crmService.notifyOther(assignVisit);
    }
}