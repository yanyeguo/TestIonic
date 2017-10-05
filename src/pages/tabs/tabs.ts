
import {  Tabs } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';

import { UserCenterPage } from '../user-center/user-center';
import { HomePage } from '../home/home';
import { CoshowPage } from '../coshow/coshow';

@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {


  @ViewChild('mainTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab0Root = CoshowPage;
  tab2Root = AboutPage;
  tab3Root = UserCenterPage;

  // constructor( private nav: NavController) {
  constructor( ) {
    // this.app=app;
  }
  ionViewDidEnter() {
    //在进入完成之后，我们动态的选定一个tab
    // this.tabRef.select(3);
    // console.log(this.tabRef);

  }
}
