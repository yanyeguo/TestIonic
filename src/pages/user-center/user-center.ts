
import { Component } from '@angular/core';
import { NavController, LoadingController,  ToastController, ModalController } from 'ionic-angular';

import { ContactPage } from "../contact/contact";
import { ImagePicker } from '@ionic-native/image-picker';
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html'
})
export class UserCenterPage {

  user;
  constructor(private imagePic: ImagePicker, public navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private modelCtrl: ModalController) {
    this.user = {};
    this.user.username = '';
    this.user.password = '';
    this.user.face='assets/img/barrett.jpg';
    if(localStorage.Logined=='true'){
      this.user.face='assets/img/avatar-'+localStorage.username+'.png';
      console.log(this.user.face);
    }else{
      var modal = this.modelCtrl.create(ContactPage);
      modal.onDidDismiss(data=>{
        this.user.face='assets/img/avatar-'+data+'.png';
      });
      modal.present();
    }
  }
  logout(){
    localStorage.username='';
    localStorage.Logined='false';
    var modal = this.modelCtrl.create(ContactPage);
    modal.onDidDismiss(data=>{
      this.user.face='assets/img/avatar-'+data+'.png';
    });
    modal.present();
  }

}

