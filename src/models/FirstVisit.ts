import { VisitBase } from './VisitBase';

export class FirstVisit extends VisitBase {
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
}