import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetail } from '../../Models/UserDetails/user-detail.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../providers/toast/toast.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  userdetail ={} as UserDetail;
  // loader: Loading;
  
 /*  userdetail: UserDetail = {
    name: '',
    email: undefined,
    password: undefined,
    mobile: undefined,
    address: undefined,
    acctype: undefined,
  }; */

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toast: ToastService,
    // private loading: LoadingController,
    private authService: AuthServiceProvider
    ) {  }

 /*  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } */


  ionViewCanEnter() {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.navCtrl.setRoot('MenuPage');
      }
    })
  }

/*   loginUser() {
    this.authService.login();
    this.navCtrl.setRoot('MenuPage');
  } */

 /*  presentLoadingDefault() {
    this.loader = this.loading.create({
      content: 'Please Wait, while we log you in ...'
    });
    this.loader.present();
  } */

     

  async login()  {
    try { 
     await this.authService.login(this.userdetail).then(ref => {
      this.toast.show(`Welcome to Home Page, ${this.userdetail.email} !`)
      this.navCtrl.setRoot('MenuPage')
      });
    }
    catch(e) {
      // console.log('got an error ', error);
      console.error(e);
      // this.toast.show(``);
    };
    // this.loader.dismiss();
    
  }

  onForgetPassword() {

  }

}
