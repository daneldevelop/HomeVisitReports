import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';


import { TaskViewPage } from '../pages';
import { TasksService } from '../../shared/shared';
import * as moment from 'moment';

import * as _ from 'lodash';
declare var window: any;

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.page.html',
})
export class TasksPage {
  public tasks: any = [];
  private groupedTasks: any;
  private tasksView: any;
  numberOfTasks : any;
  respond :any;
  isValid :any;

  currentLocation: { lat: number, lng: number };
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private tasksService: TasksService,
              private loadingController: LoadingController,
              private toastController: ToastController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: '...טוען'
    });
    loader.present().then(() => {
      this.tasksService.getTasks(this.navParams.data.Token).then(data => {
        this.respond = data;
        if (this.respond.SuccessStatus == 0 ) {
            this.tasks = this.respond.Result;
            if (this.tasks){
              this.numberOfTasks = this.tasks.length;
            }
          }
          else{
          console.log("Server error");
           }
           this.tasksView = 
          _.chain(this.tasks)
          .map(g =>  {
            let task = g;
            let nextVisitFulldate = g.NextVisitDate;
            let nextVisitOnlyDate =  this.getDate(g.NextVisitDate);
            let nextVisitonlyhour = this.getHours(g.NextVisitDate);
              return{
                  task : task,
                  nextVisitFulldate: nextVisitFulldate,
                  nextVisitOnlyDate: nextVisitOnlyDate,
                  nextVisitonlyhour: nextVisitonlyhour
              };
          })
          .value();
        
        
        this.groupedTasks =
          _.sortBy(this.tasksView, [function(o) { return o.nextVisitOnlyDate }]);
        
      
        this.groupedTasks = 
          _.chain(this.groupedTasks)
          .groupBy('nextVisitOnlyDate')
          .toPairs()
          .map(item => _.zipObject(['nextVisitOnlyDate', 'visits'], item))
          .value();
                 
          this.tasks = this.groupedTasks;
        })

        loader.dismiss();
      })
    };
  


  getDate(date){
    return moment(date).format('DD-MM-YYYY');  ;
  }

  getHours(date){
     return moment(date).format('HH:MM');  ;
  }
 
 getNumbersOfTasks(){
   return this.tasks[0].visits.length;
 }
  recalculateRoute($event, visitDate) {
    console.log('calculating route...' + visitDate);
  }

  callPerson(passedNumber) {
    window.open('tel:' + passedNumber);
  }

  navigateToTaskView($event, visit) {
    let data = { visit: visit,Token:this.navParams.data.Token,AccountId: visit.AccountId};
    this.navCtrl.push(TaskViewPage, data);
  }

  goToDirections($event, visit)  {
        window.location = `geo:${visit.AddressLat},${visit.AddressLong};u=35`;
  }

  iconClicked(iconName) {
    var msg: string;

    switch(iconName) {
      case 'delay':
        msg = 'נדחה עקב שבת\\חג';
        break;
      case 'nurse':
        msg = 'מטפל נוכח היום';
        break;
      case 'time':
        msg = 'תאריך ביקור מתוכנן חלף';
        break;
      case 'coordinate':
        msg = 'נדרש תיאום';
        break;
      case 'answer':
        msg = 'לא ניתן ליצור קשר עם הלקוח';
        break;
      default:
        msg = 'Messagenot defined for this operation';
    }

    let toast = this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: 'toastText'
    });

    toast.present();
  }
}
