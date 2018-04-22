import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolListAddPage } from './school-list-add';

@NgModule({
  declarations: [
    SchoolListAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolListAddPage),
    ComponentsModule
  ],
})
export class SchoolListAddPageModule {}
