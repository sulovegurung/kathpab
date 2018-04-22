import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListEditPage } from './user-list-edit';

@NgModule({
  declarations: [
    UserListEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListEditPage),
    ComponentsModule
  ],
})
export class UserListEditPageModule {}
