import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { SchoolDetail } from '../../Models/SchoolDetails/school-detail.model';

@Injectable()
export class SchoolDataService {
    private schoolDataRef = this.db.list<SchoolDetail>('school-list');
    
    constructor(
        private db: AngularFireDatabase ) {}
    
    getSchoolList() {
        console.log(this.schoolDataRef);
        return this.schoolDataRef;
    }

    addSchoolDetail(schooldetail: SchoolDetail) {
        return this.schoolDataRef.push(schooldetail);
    }

    editSchoolDetail(schooldetail: SchoolDetail) {
        return this.schoolDataRef.update(schooldetail.key, schooldetail);
    }

    removeSchoolDetail(schooldetail: SchoolDetail) {
        return this.schoolDataRef.remove(schooldetail.key);
    }

    getSchool(lastkey: string ) {
        console.log('xx')
        const temp = this.db.list<SchoolDetail>('school-list', ref => ref.orderByKey().startAt(lastkey).limitToFirst(1));
        console.log(temp)
        return temp;
    }
}