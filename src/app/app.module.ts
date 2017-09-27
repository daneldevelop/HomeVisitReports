import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage, ContactPage, HomePage, TabsPage, LoginPage, ActionChoosePage, TasksPage, TaskViewPage } from '../pages/pages';
import { VisitPage, VisitFooterPage, RoutineVisitPage, AssignVisitPage,OtherVisitPage,HospitalVisitPage,FirstVisitPage } from '../pages/pages';
import { TasksService, CrmService, VisitsService, RoutineVisitService, OtherVisitService, HospitalVisitService, FirstVisitService, LoginService,HomeVisitService } from '../shared/shared';
import { EnhancedCheckboxComponent } from '../components/components'
import { HebrewBool } from '../pipes/hebrewbool.pipe'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ActionChoosePage,
    TasksPage,
    TaskViewPage,
    VisitPage,
    VisitFooterPage,
    RoutineVisitPage,
    AssignVisitPage,
    OtherVisitPage,
    HospitalVisitPage,
    FirstVisitPage,
    EnhancedCheckboxComponent,
    HebrewBool
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ActionChoosePage,
    TasksPage,
    TaskViewPage,
    VisitPage,
    VisitFooterPage,
    RoutineVisitPage,
    AssignVisitPage,
    OtherVisitPage,
    HospitalVisitPage,
    FirstVisitPage,
    EnhancedCheckboxComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    TasksService,
    LoginService,
    HomeVisitService,
    CrmService,
    VisitsService,
    RoutineVisitService,
    OtherVisitService,
    HospitalVisitService,
    FirstVisitService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
