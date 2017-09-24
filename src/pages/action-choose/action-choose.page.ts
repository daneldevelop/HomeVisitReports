import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksPage, RoutineVisitPage, AssignVisitPage, OtherVisitPage, HospitalVisitPage, FirstVisitPage } from '../pages';
import { HomeVisitTypeEnum } from "../../enums/home-visit-enum";

@Component({
  selector: 'page-action-choose',
  templateUrl: 'action-choose.page.html',
})
export class ActionChoosePage {
  inputData: any;
  choosingScreen: string;
  HomeVisitTypeEnum : HomeVisitTypeEnum;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  
  ionViewDidLoad() {
    // either can be tasks or visits
    this.inputData = this.navParams.data;
    this.choosingScreen = this.inputData.choosingScreen;
  }

  tasks() {
    let data = { Token:this.inputData.Token,
      UserName: this.inputData.UserName,
      BranchAddress: this.inputData.UserName
    };
    this.navCtrl.push(TasksPage, data);
  }

  reports() {
    console.log("Not implemented yet");
  }

  chooseHomeVisit(homeVisitE: HomeVisitTypeEnum,visitType : string) {
    let visitData = { visitType: visitType,
                     clientName: this.inputData.task.AccountFullName,
                     clientid: this.inputData.clientId,
                     PlannedHomeVisitDate : this.inputData.task.NextVisitDate,
                     Token: this.inputData.Token};
    switch(homeVisitE) {
      case HomeVisitTypeEnum.routineHomeVisit:
        this.navCtrl.push(RoutineVisitPage, visitData);
      break;
      case HomeVisitTypeEnum.assignHomeVisit:
        this.navCtrl.push(AssignVisitPage, visitData);
      break;
      case HomeVisitTypeEnum.otherHomeVisit:
        this.navCtrl.push(OtherVisitPage, visitData);
      break;
      case HomeVisitTypeEnum.hospitalVisit:
        this.navCtrl.push(HospitalVisitPage, visitData);
      break;
      case HomeVisitTypeEnum.firstHomeVisit:
        this.navCtrl.push(FirstVisitPage, visitData);
      break;
    }
  }
}
