import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { UserDetail } from '../../Models/UserDetails/user-detail.model';

@Injectable()
export class UserDataService {
    private userDataRef = this.db.list<UserDetail>('user-list');
    
    constructor(private db: AngularFireDatabase ) {}
    
    getUserList() {
        return this.userDataRef;
    }

    addUserDetail(userdetail: UserDetail) {
        return this.userDataRef.push(userdetail);
    }

    editUserDetail(userdetail: UserDetail) {
        return this.userDataRef.update(userdetail.key, userdetail);
    }

    removeUserDetail(userdetail: UserDetail) {
        return this.userDataRef.remove(userdetail.key);
    }
}