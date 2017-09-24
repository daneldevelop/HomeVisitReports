import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService } from '../../../shared/shared';
import { HospitalVisit } from '../../../models/models';
import { VisitPage } from "../../pages";

@Component ({
    selector: 'page-hospital-visit',
    templateUrl: './hospital-visit.page.html'
})
export class HospitalVisitPage {
    visitType: string;
    clientName: string;
    Token: string;
    AccountId:string;
    PlannedHomeVisitDate: Date;

    submitAttempt: boolean = false;
   
    hospitalForm: FormGroup;
    
    @ViewChild('myVisitPage') visitPage: VisitPage;
    AccountDescription: string = '';
    Hospital: number;
    Department: number;
    WardNumber: string = '';
    RoomNumber: string = '';
    IsClientKnowAnother: boolean;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private crmService: CrmService,
                public formBuilder: FormBuilder) {
    this.hospitalForm = formBuilder.group({
        AccountDescription: ['',Validators.required],
        Hospital: [''],
        Department: [''],
        WardNumber: [''],
        RoomNumber: [''],
        IsClientKnowAnother: ['',Validators.required],
        });
    }

    ionViewDidLoad() {
        this.visitType = this.navParams.data.visitType;
        this.clientName = this.navParams.data.clientName;
        this.AccountId = this.navParams.data.clientid;
        this.Token = this.navParams.data.Token;
    }

    saveHospital() {
       this.submitAttempt = true;
       if(!this.hospitalForm.valid || !this.visitPage.visitForm.valid ){
            console.log('not valid')
            return;
        } 
        else{
           console.log('good')
        } 

        let hospitalVisit = new HospitalVisit();
        hospitalVisit.AccountDescription = this.AccountDescription;
        hospitalVisit.Hospital = this.Hospital;
        hospitalVisit.Department = this.Department;
        hospitalVisit.WardNumber = this.WardNumber;
        hospitalVisit.RoomNumber = this.RoomNumber;
        hospitalVisit.IsClientKnowAnother = this.IsClientKnowAnother;
        this.crmService.notifyOther(hospitalVisit);
    }

}