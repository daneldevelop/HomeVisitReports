import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams} from "ionic-angular";
import { CrmService } from "../../../shared/shared";
import { DatePicker } from "@ionic-native/date-picker";
import { FirstVisit } from '../../../models/models';
import { VisitPage } from "../../pages";

@Component ({
    selector: 'page-first-visit',
    templateUrl: './first-visit.page.html'
})

export class FirstVisitPage {
    visitType: string;
    clientName: string;
    AccountId: string;
    Token: string;
    submitAttempt: boolean = false;

    firstForm: FormGroup;


     @ViewChild('myVisitPage') visitPage: VisitPage;
    //Client Info
    AccountIdNumber: string = '';
    AccountBirthDate : string = '';
    IsCoordiateWithAccountNeeded: boolean; 
    IsHolocaustSurvivor: boolean;
    IsAlone: boolean;
    IsLivingAlone: boolean;
    IsAtRisk: boolean;
    NumberOfPersons: string = '';
    NumberOfChildren: string = '';
    Occupation : string = '';
    Clinic: string = '';
    hmoBranch: string = '';
    DoctorName: string = '';
    AccountDescription: string = '';
    AccountPersonality: string = '';
    Language: string = '';
    NursingInfo: string = '';
    AccountEmotions: string = '';
    MedInfo: string = '';
    AccountSocial: string = '';
    ResidenceConditions: string = '';
    Accessibility: string = '';
    Location: string = '';
    Expectation: string = '';
    Eestimateneeds: string = '';
    Rolenurse: string = '';
    Notenursetask: string = '';
    IsKnowOtherThatNeedHelp: boolean;
    IsTromDone: boolean;
    //Trom General Info
    IsPreAssessment: boolean;
    PreAssessmentIsAlone: boolean;
    //Trom Mobility
    PreAssessmentMobilebyObject: number;
    PreAssessmentHelpFromLayToStand: number;
    PreAssessmentHelpFromSittingToStand: number;
    PreAssessmentUseWheelChair: number;
    PreAssessmentDisabledWheelChair: number;
    //Trom ADL
    PreAssessmentFalling: number;
    PreAssessmentDressing: number;
    PreAssessmentBathing: number;
    PreAssessmentDrinkeat: number;
    PreAssessmentSevretions: number;
    PreAssessmentSight: number;
    PreAssessmentDementia: number;
    PreAssessmentTotallyenthralled: number;
    //Trom Observation
    PreAssessmentObservation: number;
    PreDescriptionComments: string = '';

  constructor(private navParams: NavParams,
              private crmService: CrmService,
              private datePicker: DatePicker,
              public formBuilder: FormBuilder) {
              this.AccountBirthDate = this.getFormattedDate(new Date());
    this.firstForm = formBuilder.group({
        AccountIdNumber: ['', Validators.required],
        AccountBirthDate: [''],
        IsCoordiateWithAccountNeeded: [''],
        IsHolocaustSurvivor: [''],
        IsAlone: [''],
        IsLivingAlone: [''],
        IsAtRisk: [''],
        NumberOfPersons:[''],
        NumberOfChildren:[''],
        Occupation:[''],
        Clinic: [''],
        hmoBranch: [''],
        DoctorName: [''],
        AccountDescription: [''],
        AccountPersonality: [''],
        Language: [''],
        NursingInfo: [''],
        AccountEmotions: [''],
        MedInfo: [''],
        AccountSocial: [''],
        ResidenceConditions: [''],
        Accessibility: [''],
        Location: [''],
        Expectation: [''],
        Eestimateneeds: [''],
        Rolenurse: [''],
        Notenursetask: [''],
        IsKnowOtherThatNeedHelp: ['', Validators.required],
        IsTromDone: ['', Validators.required],
       //Trom General Info
        IsPreAssessment:['',this.IsTromDone ? Validators.required : null],
        PreAssessmentIsAlone: [''],
        //Trom Mobility
        PreAssessmentMobilebyObject: [''],
        PreAssessmentHelpFromLayToStand: [''],
        PreAssessmentHelpFromSittingToStand: [''],
        PreAssessmentUseWheelChair: [''],
        PreAssessmentDisabledWheelChair: [''],
        //Trom ADL
        PreAssessmentFalling: [''],
        PreAssessmentDressing: [''],
        PreAssessmentBathing: [''],
        PreAssessmentDrinkeat: [''],
        PreAssessmentSevretions: [''],
        PreAssessmentSight: [''],
        PreAssessmentDementia: [''],
        PreAssessmentTotallyenthralled: [''],
        //Trom Observation
        PreAssessmentObservation: [''],
        PreDescriptionComments: [''],
      });
 }
 

   runCalendar() {
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            is24Hour: true
        })
        .then(
            date => this.AccountBirthDate = this.getFormattedDate(date),
            err => console.log('Error occurred while getting date: ', err)
        );
    }



    getFormattedDate(dt: Date) {
        return dt.toLocaleDateString("he") + " " + dt.toLocaleTimeString("he", { hour: "2-digit", minute: "2-digit" });
    }
       

    ionViewDidLoad() {
        this.visitType = this.navParams.data.visitType;
        this.clientName = this.navParams.data.clientName;
        this.AccountId = this.navParams.data.clientid;
        this.Token = this.navParams.data.Token;
    }
    

    saveFirst() {
        this.submitAttempt = true;
         
        if(!this.firstForm.valid || !this.visitPage.visitForm.valid ){
            console.log('not valid');
            return;
        } 
        else{
           console.log('good');
        } 
        let firstVisit = new FirstVisit();
        //Client Info
        firstVisit.AccountIdNumber = this.AccountIdNumber;
        firstVisit.AccountBirthDate = this.AccountBirthDate;
        firstVisit.IsCoordiateWithAccountNeeded = this.IsCoordiateWithAccountNeeded;
        firstVisit.IsHolocaustSurvivor = this.IsHolocaustSurvivor;
        firstVisit.IsAlone = this.IsAlone; 
        firstVisit.IsLivingAlone = this.IsLivingAlone;
        firstVisit.IsAtRisk = this.IsAtRisk;
        firstVisit.NumberOfPersons = this.NumberOfPersons;
        firstVisit.NumberOfChildren = this.NumberOfChildren;
        firstVisit.Occupation = this.Occupation;
        // firstVisit.Clinic = this.Clinic;
        // firstVisit.hmoBranch = this.hmoBranch;
        firstVisit.DoctorName = this.DoctorName;
        firstVisit.AccountDescription = this.AccountDescription;
        firstVisit.AccountPersonality = this.AccountPersonality;
        firstVisit.Language = this.Language;
        firstVisit.NursingInfo = this.NursingInfo;
        firstVisit.AccountEmotions = this.AccountEmotions;
        firstVisit.MedInfo = this.MedInfo;
        firstVisit.AccountSocial = this.AccountSocial;
        firstVisit.ResidenceConditions = this.ResidenceConditions;
        firstVisit.Accessibility = this.Accessibility;
        firstVisit.Location = this.Location;
        firstVisit.Expectation = this.Expectation;
        firstVisit.Eestimateneeds = this.Eestimateneeds;
        firstVisit.Rolenurse = this.Rolenurse;
        firstVisit.Notenursetask = this.Notenursetask;
        firstVisit.IsKnowOtherThatNeedHelp = this.IsKnowOtherThatNeedHelp;
        firstVisit.IsTromDone = this.IsTromDone;
        //Trom General Info
        firstVisit.IsPreAssessment = this.IsPreAssessment;
        firstVisit.PreAssessmentIsAlone = this.PreAssessmentIsAlone;
        //Trom Mobility
        firstVisit.PreAssessmentMobilebyObject = this.PreAssessmentMobilebyObject;
        firstVisit.PreAssessmentHelpFromLayToStand = this.PreAssessmentHelpFromLayToStand;
        firstVisit.PreAssessmentHelpFromSittingToStand = this.PreAssessmentHelpFromSittingToStand;
        firstVisit.PreAssessmentUseWheelChair = this.PreAssessmentUseWheelChair;
        firstVisit.PreAssessmentDisabledWheelChair = this.PreAssessmentDisabledWheelChair;
        //Trom ADL
        firstVisit.PreAssessmentFalling = this.PreAssessmentFalling;
        firstVisit.PreAssessmentDressing = this.PreAssessmentDressing;
        firstVisit.PreAssessmentBathing = this.PreAssessmentBathing;
        firstVisit.PreAssessmentDrinkeat = this.PreAssessmentDrinkeat;
        firstVisit.PreAssessmentSevretions = this.PreAssessmentSevretions;
        firstVisit.PreAssessmentSight = this.PreAssessmentSight;
        firstVisit.PreAssessmentDementia = this.PreAssessmentDementia;
        firstVisit.PreAssessmentTotallyenthralled = this.PreAssessmentTotallyenthralled;
        //Trom Observation
        firstVisit.PreAssessmentObservation = this.PreAssessmentObservation;
        firstVisit.PreDescriptionComments = this.PreDescriptionComments;
        
        this.crmService.notifyOther(firstVisit);
    }

}
