import { Component } from '@angular/core';

import { AboutPage, ContactPage, LoginPage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
