import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetail } from '../../Models/UserDetails/user-detail.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../providers/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  // userdetail ={} as UserDetail;
  
  userdetail: UserDetail = {
    name: '',
    email: undefined,
    password: undefined,
    mobile: undefined,
    address: undefined,
    acctype: undefined,
  };

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toast: ToastService

    ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  ionViewCanEnter() {
  
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.navCtrl.setRoot('HomePage');
      }
    })
    //  this.toast.show(`Welcome to Home Page, ${data.email} !`);
  }

  async login(userdetail: UserDetail)  {
    try { 
      const result = await this.afAuth.auth.signInWithEmailAndPassword(userdetail.email, userdetail.password);
      if(result) {
        this.toast.show(`Welcome to Home Page, ${userdetail.email} !`);
        this.navCtrl.setRoot('HomePage');
      }
  } 
    catch(e) {
      // console.log('got an error ', error);
      console.error(e);
    };
    
  }

  onForgetPassword() {

  }

}
