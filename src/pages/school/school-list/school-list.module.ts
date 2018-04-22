import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolListPage } from './school-list';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SchoolListPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolListPage),
    ComponentsModule
  ],
})
export class SchoolListPageModule {}
