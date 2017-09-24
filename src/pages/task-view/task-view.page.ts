import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ActionChoosePage } from '../pages';
import { TasksService } from '../../shared/shared';


@Component({
  selector: 'page-task-view',
  templateUrl: 'task-view.page.html',
})
export class TaskViewPage {
  task: any;
  inputData: any;
  respond: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private tasksService: TasksService, private loadingController: LoadingController) { }

  ionViewDidLoad() 
  {
    let loader = this.loadingController.create
    ({
      content: '...טוען'
     }
    );
    this.inputData = this.navParams.data;
    loader.present().then
    (() => 
      {
        this.tasksService.getTaskData(this.inputData.Token,this.inputData.AccountId).then
        (data => 
          {
            this.respond = data;
              if (this.respond.SuccessStatus == 0 ) 
                {
                  this.task = this.respond.Result;
                }
                else
                {
                console.log("Server error");
                }
              loader.dismiss();
          }
        );
      }
   );
  }

  fillReport() {
    let data = {  task: this.task , clientId:this.inputData.AccountId,Token:this.inputData.Token};
    this.navCtrl.push(ActionChoosePage, data);
  }

  getYesNoColor(answer) {
    return answer ? 'primary' : 'danger';
  }
}
