

import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { CtdetailsPage } from '../ctdetails/ctdetails';

@Component({
  selector:'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private contacts: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.contacts = [{ 'id': 1, 'name': '李四', 'text': '198564523151' },
    { 'id': 2, 'name': '李小美', 'text': '19856999992' },
    { 'id': 3, 'name': '李小万', 'text': '19856999993' },
    { 'id': 4, 'name': '王大王', 'text': '19856999994' },
    { 'id': 5, 'name': '齐天大圣', 'text': '19856999995' },];
  }
  clickItem(event, item) {
    // alert(item.name);
    this.navCtrl.push(CtdetailsPage,{item:item});
  }
  clickDelete(event, item){
    for (var i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i]==item) {
        this.contacts.splice(i,1);
      }
      
    }
  }
}