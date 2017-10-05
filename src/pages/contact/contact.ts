

import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ModalController, ViewController } from 'ionic-angular';

import { RegisterPage } from "../register/register";
import { UserCenterPage } from "../user-center/user-center";
import { ImagePicker } from '@ionic-native/image-picker';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  user;
  constructor(private viewCtrl: ViewController, private imagePic: ImagePicker, public navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private modelCtrl: ModalController) {
    this.user = {};
    this.user.username = '';
    this.user.password = '';
    this.user.face = 'assets/img/barrett.jpg';
  }
  showFill() {

    // alert(this.user.username);
    // console.log(this.user.password);
    if (this.user.username == '') {
      // const alert = this.alertCtrl.create({
      //   title: '用户中心',
      //   subTitle: '输入的用户名不正确',
      //   buttons: ['OK']
      // });
      // alert.present();

      const toast = this.toastCtrl.create({
        message: '输入的用户名不正确',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {


      //这里模拟登录
      if (this.user.password == '1') {
        localStorage.username = this.user.username;
        localStorage.Logined = 'true';
        this.viewCtrl.dismiss(this.user.username);
      } else {
        let loader1 = this.loadingCtrl.create({
          content: '登录失败',
          // spinner: 'dots',
          duration: 3000
        });
        loader1.present();
      }
    }
  }
  openRegisterPage() {
    var modal = this.modelCtrl.create(RegisterPage);
    modal.present();
  }

  uploadImage() {
    var options = {
      maximumImagesCount: 10,

    };
    this.imagePic.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        // console.log('Image URI: ' + results[i]);
        this.user.face = results[i];
      }
    }, (err) => { });
  }

}
// @Component({
//   template:  `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//       <button ion-button (click)="dismiss()">
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//       </button>
//     </ion-buttons>
//   </ion-toolbar>
// </ion-header>

// <ion-content>
//   <ion-list>
//       <ion-item>
//         <ion-avatar item-start>
//           <img src="{{character.image}}">
//         </ion-avatar>
//         <h2>{{character.name}}</h2>
//         <p>{{character.quote}}</p>
//       </ion-item>

//       <ion-item *ngFor="let item of character['items']">
//         {{item.title}}
//         <ion-note item-end>
//           {{item.note}}
//         </ion-note>
//       </ion-item>
//   </ion-list>
// </ion-content>
// `
// })
// export class ModalContentPage {
//   character;

//   constructor(
//     public platform: Platform,
//     public params: NavParams,
//     public viewCtrl: ViewController
//   ) {
//     var characters = [
//       {
//         name: 'Gollum',
//         quote: 'Sneaky little hobbitses!',
//         image: 'assets/img/avatar-gollum.jpg',
//         items: [
//           { title: 'Race', note: 'Hobbit' },
//           { title: 'Culture', note: 'River Folk' },
//           { title: 'Alter Ego', note: 'Smeagol' }
//         ]
//       },
//       {
//         name: 'Frodo',
//         quote: 'Go back, Sam! I\'m going to Mordor alone!',
//         image: 'assets/img/avatar-frodo.jpg',
//         items: [
//           { title: 'Race', note: 'Hobbit' },
//           { title: 'Culture', note: 'Shire Folk' },
//           { title: 'Weapon', note: 'Sting' }
//         ]
//       },
//       {
//         name: 'Samwise Gamgee',
//         quote: 'What we need is a few good taters.',
//         image: 'assets/img/avatar-samwise.jpg',
//         items: [
//           { title: 'Race', note: 'Hobbit' },
//           { title: 'Culture', note: 'Shire Folk' },
//           { title: 'Nickname', note: 'Sam' }
//         ]
//       }
//     ];
//     this.character = characters[this.params.get('charNum')];
//   }

//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
// }

