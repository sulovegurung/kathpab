import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolListDisplayPage } from './school-list-display';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SchoolListDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolListDisplayPage),
    ComponentsModule
  ],
})
export class SchoolListDisplayPageModule {}
