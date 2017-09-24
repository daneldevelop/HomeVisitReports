import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Subscription } from 'rxjs/Subscription';

import { CrmService } from '../../../shared/shared';
import { HomeVisitService } from "../../../shared/homevisit.service";
import { HomeVisitTypeEnum } from "../../../enums/home-visit-enum";
import { TasksPage } from "../../pages";

@Component({
    selector: 'page-visit',
    templateUrl: './visit.page.html'
})
export class VisitPage {
    subscription: Subscription;
    respond: any;

    @Input() visitType: string;
    @Input() clientName: string;
    @Input() submitAttempt: boolean;
    @Input() AccountId: boolean;
    @Input() Token: boolean;

    visitForm: FormGroup;
    ReportType: HomeVisitTypeEnum;
    ActualHomeVisitDate: string = '';
    VisitCar: string;
    ExceptionReason: string;
    EarlyReason: string;
    AdditionalAttendence: string;
    AdditionalPhone: string;
    IsAccountExists: boolean;
    IsOccuredAsPlanned: boolean;
    IsNurseExists: boolean;
    NurseIdNumber: string;
    NurseName:  string;
    NurseAbsenceReason: string;
    PlannedHomeVisitDate : Date;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private datePicker: DatePicker,
                private crmService: CrmService,
                public formBuilder: FormBuilder,
                private homeVisitService: HomeVisitService) {
        this.subscription = this.crmService.notifyObservable$.subscribe(data => this.save(data));

        this.ActualHomeVisitDate = this.getFormattedDate(new Date());

        this.visitForm = formBuilder.group({
        ActualHomeVisitDate:[''],
        VisitCar:[''],
        ExceptionReason: [''],
        EarlyReason: [''],
        AdditionalAttendence: [''],
        AdditionalPhone: [''],
        IsAccountExists: ['',Validators.required],
        IsOccuredAsPlanned: [''],
        IsNurseExists: ['',Validators.required],
        NurseIdNumber: [''],
        NurseName: [''],
        NurseAbsenceReason: ['']
            });
    }

    runCalendar() {
        this.datePicker.show({    
            date: new Date(),
            mode: 'datetime',
            is24Hour: true
        })
        .then(
            date => this.ActualHomeVisitDate = this.getFormattedDate(date),
            err => console.log('Error occurred while getting date: ', err)
        );
    }

    getFormattedDate(dt: Date) {
        return dt.toLocaleDateString("he-IL") + " " + dt.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
    }

    public save(visitObj): void {
        visitObj.Token = this.Token;
        visitObj.AccountId = this.AccountId;
        visitObj.ActualHomeVisitDate = this.ActualHomeVisitDate;
        visitObj.VisitCar = this.VisitCar;
        visitObj.ExceptionReason = this.ExceptionReason;
        visitObj.EarlyReason = this.EarlyReason;
        visitObj.AdditionalAttendence = this.AdditionalAttendence;
        visitObj.AdditionalPhone = this.AdditionalPhone;
        visitObj.IsAccountExists = this.IsAccountExists;
        visitObj.IsOccuredAsPlanned = this.IsOccuredAsPlanned;
        visitObj.IsNurseExists = this.IsNurseExists;
        visitObj.NurseIdNumber = this.NurseIdNumber;
        visitObj.NurseAbsenceReason = this.NurseAbsenceReason;
        // To call sevice for save
        this.saveByType(visitObj);
    }

    saveByType(visitObj): void {
            this.homeVisitService.postHomeVisit(visitObj,this.visitType).then(data => {
                this.respond = data;
                let inputData = { choosingScreen: "tasks",Token:this.Token };
                this.navCtrl.push(TasksPage,inputData);
            })
    }
}