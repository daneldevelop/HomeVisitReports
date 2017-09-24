import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-visit-footer',
    templateUrl: './visit-footer.page.html'
})
export class VisitFooterPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    viewTaskDeails() {
        this.navCtrl.popTo(this.navCtrl.getByIndex(3));
    }

    goToTasks() {
        this.navCtrl.popTo(this.navCtrl.getByIndex(2));
    }
}