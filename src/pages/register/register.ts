import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
    templateUrl: 'register.html'
  })
  export class RegisterPage {
      
constructor(private viewCtrl:ViewController){}
    dismiss() {
        this.viewCtrl.dismiss();
      }
  }