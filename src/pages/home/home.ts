import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth
  ) {
  }


  ionViewCanEnter() {
  
    this.afAuth.authState.subscribe(user => {
      if(!user) {
        this.navCtrl.setRoot('LoginPage');
      }
    })
    //  this.toast.show(`Welcome to Home Page, ${data.email} !`);
  }
 /*  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  } */

}
