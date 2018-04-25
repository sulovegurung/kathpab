import { Injectable } from '@angular/core';
import { UserDetail } from '../../Models/UserDetails/user-detail.model';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthServiceProvider {
  
  constructor(private afAuth: AngularFireAuth) { }

  async login(userdetail: UserDetail) {
   
    return await this.afAuth.auth.signInWithEmailAndPassword(userdetail.email, userdetail.password);
  }
 
  /* authenticated(): boolean {
    return this.isLoggedIn;
  } */

 /*  getAutheticatedUser() {
    return  this.afAuth.authState;
  } */
}
