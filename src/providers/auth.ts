import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// import { UserDetail } from '../Models/UserDetails/user-detail.model';

@Injectable()
export class AuthProvider {




    // private userDataRef = this.db.list<UserDetail>('user-list');
    
    constructor(
        // private db: AngularFireDatabase,
        private afAuth: AngularFireAuth
     ) {}
    
    logout() {
        // this.store.dispatch(new userActions.ResetUser(''))
        this.afAuth.auth.signOut();
      }
      getAutheticatedUser() {
        return  this.afAuth.authState;
      }


    }