import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListAddPage } from './user-list-add';

@NgModule({
  declarations: [
    UserListAddPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListAddPage),
    ComponentsModule
  ],
})
export class UserListAddPageModule {}
