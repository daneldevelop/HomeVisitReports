import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { CrmService } from '../../../shared/shared';
import { RoutineVisit } from '../../../models/models';
import { VisitPage } from "../../pages";

@Component ({
    selector: 'page-routine-visit',
    templateUrl: './routine-visit.page.html'
})
export class RoutineVisitPage {
    visitType: string;
    clientName: string;
    submitAttempt: boolean = false;
    AccountId: string;
    Token: string;
    routineForm: FormGroup;

  @ViewChild('myVisitPage') visitPage: VisitPage;
    // general
    IsCallTookPlace: boolean;
    CallDidntTookPlaceReasons: string;
    isWorkingJournalChecked: boolean;
    isWorkingJournalValid: boolean;
    // external look
    CleaningLevel: number;
    SmellLevel: number;
    AppearanceComments: string;
    PositionComments: string;
    IsDressedAccordingToseason: boolean;
    // assessment
    FunctionalLevelComments: string;
    EmotionalLevelComments: string;
    HealthLevelComments: string;
    // eating
    IsFoodExists: boolean;
    FoodProductsComments: string;
    // apartment
    VentelationLevel: number;
    RoomCleaningLevel: number;
    KitchenCleaningLevel: number;
    ToiletLevel: number;
    BathroomLevel: number;
    AccessoriesMatchingLevel: number;
    AccessoriesMatchingLevelComments: string;
    // events
    AccountChangesAndEventsComments: string;
    // assignemnts
    IsPersonalCareRequired: boolean;
    IsSupervisionRequired: boolean;
    IsShoppingRequired: boolean;
    IsNursingCareRequired: boolean;
    IsBathingRequired: boolean;
    IsHouseholdingRequired: boolean;
    IsChangingAbsorbentProductsRequired: boolean;
    // service
    IsSatisfactionFromNurseLevel: number;
    IsNursingByProgram: boolean;
    NursingByProgramComments: string;
    ServiceFaultComments: string;
    // requests
    PlanChangingRequest: boolean;
    IsClaimHelpRequired: boolean;
    IsDistressSwitchRequired: boolean;
    IsNurseWithSleepingArragment: boolean;
    IsCommunityIntervention: boolean;
    CommunityInterventionComments: string;
    // conclusion
    IsReportUnusualIssue: boolean;
    ReportUnusualIssueComments: string;
    IsClientKnowAnother: boolean;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private crmService: CrmService,
                public formBuilder: FormBuilder) { 
       this.routineForm = formBuilder.group({
               // general
                gender: [''],
                IsCallTookPlace: ['',Validators.required],
                CallDidntTookPlaceReasons: ['',],
                isWorkingJournalChecked: ['',Validators.required],
                isWorkingJournalValid: [''],
                // external look
                CleaningLevel: [''],
                SmellLevel: [''],
                AppearanceComments: [''],
                PositionComments: [''],
                IsDressedAccordingToseason: [''],
                // assessment
                FunctionalLevelComments: [''],
                EmotionalLevelComments: [''],
                HealthLevelComments: [''],
                // eating
                IsFoodExists: [''],
                FoodProductsComments: [''],
                // apartment
                VentelationLevel: [''],
                RoomCleaningLevel: [''],
                KitchenCleaningLevel: [''],
                ToiletLevel: [''],
                BathroomLevel: [''],
                AccessoriesMatchingLevel: [''],
                AccessoriesMatchingLevelComments: [''],
                // events
                AccountChangesAndEventsComments: [''],
                // assignemnts
                IsPersonalCareRequired: [''],
                IsSupervisionRequired: [''],
                IsShoppingRequired: [''],
                IsNursingCareRequired: [''],
                IsBathingRequired: [''],
                IsHouseholdingRequired: [''],
                IsChangingAbsorbentProductsRequired: [''],
                // service
                IsSatisfactionFromNurseLevel: [''],
                IsNursingByProgram: [''],
                NursingByProgramComments: [''],
                ServiceFaultComments: [''],
                // requests
                PlanChangingRequest: [''],
                IsClaimHelpRequired: [''],
                IsDistressSwitchRequired: [''],
                IsNurseWithSleepingArragment: [''],
                IsCommunityIntervention: [''],
                CommunityInterventionComments: [''],
                // conclusion
                IsReportUnusualIssue: [''],
                ReportUnusualIssueComments: [''],
                IsClientKnowAnother: ['',Validators.required],   
       });          
                }

    ionViewDidLoad() {
        this.visitType = this.navParams.data.visitType;
        this.clientName = this.navParams.data.clientName;
        this.AccountId = this.navParams.data.clientid;
        this.Token = this.navParams.data.Token;
    }

    saveRoutine() {
         this.submitAttempt = true;
         
        if(!this.routineForm.valid || !this.visitPage.visitForm.valid ){
            console.log('not valid');
            return;
        } 
        else{
           console.log('good')
        } 
        let routineVisit = new RoutineVisit();
        // general
        routineVisit.IsCallTookPlace = this.IsCallTookPlace;
        routineVisit.CallDidntTookPlaceReasons = this.CallDidntTookPlaceReasons;
        routineVisit.isWorkingJournalChecked = this.isWorkingJournalChecked;
        routineVisit.isWorkingJournalValid = this.isWorkingJournalValid;
        // external look
        routineVisit.CleaningLevel = this.CleaningLevel;
        routineVisit.SmellLevel = this.SmellLevel;
        routineVisit.AppearanceComments = this.AppearanceComments;
        routineVisit.PositionComments = this.PositionComments;
        routineVisit.IsDressedAccordingToseason = this.IsDressedAccordingToseason;
        // assessment
        routineVisit.FunctionalLevelComments = this.FunctionalLevelComments;
        routineVisit.EmotionalLevelComments = this.EmotionalLevelComments;
        routineVisit.HealthLevelComments = this.HealthLevelComments;
        // eating
        routineVisit.IsFoodExists = this.IsFoodExists;
        routineVisit.FoodProductsComments = this.FoodProductsComments;
        // apartment
        routineVisit.VentelationLevel = this.VentelationLevel;
        routineVisit.RoomCleaningLevel = this.RoomCleaningLevel;
        routineVisit.KitchenCleaningLevel = this.KitchenCleaningLevel;
        routineVisit.ToiletLevel = this.ToiletLevel;
        routineVisit.BathroomLevel = this.BathroomLevel;
        routineVisit.AccessoriesMatchingLevel = this.AccessoriesMatchingLevel;
        routineVisit.AccessoriesMatchingLevelComments = this.AccessoriesMatchingLevelComments;
        // events
        routineVisit.AccountChangesAndEventsComments = this.AccountChangesAndEventsComments;
        // assignemnts
        routineVisit.IsPersonalCareRequired = this.IsPersonalCareRequired;
        routineVisit.IsSupervisionRequired = this.IsSupervisionRequired;
        routineVisit.IsShoppingRequired = this.IsShoppingRequired;
        routineVisit.IsNursingCareRequired = this.IsNursingCareRequired;
        routineVisit.IsBathingRequired = this.IsBathingRequired;
        routineVisit.IsHouseholdingRequired = this.IsHouseholdingRequired;
        routineVisit.IsChangingAbsorbentProductsRequired = this.IsChangingAbsorbentProductsRequired;
        // service
        routineVisit.IsSatisfactionFromNurseLevel = this.IsSatisfactionFromNurseLevel;
        routineVisit.IsNursingByProgram = this.IsNursingByProgram;
        routineVisit.NursingByProgramComments = this.NursingByProgramComments;
        routineVisit.ServiceFaultComments = this.ServiceFaultComments;
        // requests
        routineVisit.PlanChangingRequest = this.PlanChangingRequest;
        routineVisit.IsClaimHelpRequired = this.IsClaimHelpRequired;
        routineVisit.IsDistressSwitchRequired = this.IsDistressSwitchRequired;
        routineVisit.IsNurseWithSleepingArragment = this.IsNurseWithSleepingArragment;
        routineVisit.IsCommunityIntervention = this.IsCommunityIntervention;
        routineVisit.CommunityInterventionComments = this.CommunityInterventionComments;
        // conclusion
        routineVisit.IsReportUnusualIssue = this.IsReportUnusualIssue;
        routineVisit.ReportUnusualIssueComments = this.ReportUnusualIssueComments;
        routineVisit.IsKnowOtherThatNeedHelp = this.IsClientKnowAnother;

        this.crmService.notifyOther(routineVisit);
    }
}