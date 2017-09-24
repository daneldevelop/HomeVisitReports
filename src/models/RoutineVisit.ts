import { VisitBase } from './VisitBase';

export class RoutineVisit extends VisitBase {
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
    IsKnowOtherThatNeedHelp: boolean;
}