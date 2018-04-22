import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListDisplayPage } from './user-list-display';

@NgModule({
  declarations: [
    UserListDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListDisplayPage),
    ComponentsModule
  ],
})
export class UserListDisplayPageModule {}
