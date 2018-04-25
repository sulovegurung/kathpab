import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserDataService } from '../providers/user-data/user-data.service';
import { SchoolDataService } from '../providers/school-data/school-data.service';
import { ToastService } from '../providers/toast/toast.service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
// import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataService,
    SchoolDataService,
    ToastService,
    AuthServiceProvider
  ]
})
export class AppModule {}
