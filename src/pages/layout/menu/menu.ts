import { PageInterface } from './menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';



export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';
  
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    {title: 'Manage User', pageName: 'TabsPage', tabComponent: 'UserListPage', index: 1, icon: 'contacts' },
    {title: 'Manage School', pageName: 'TabsPage', tabComponent: 'SchoolListPage', index: 2, icon: 'podium' },
    {title: 'Report', pageName: 'TabsPage', tabComponent: 'ReportPage', index: 3, icon: 'clipboard' },
    {title: 'Information', pageName: 'InfoPage',  icon: 'list-box' }
  ]


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private authService: AuthServiceProvider
  ) { }
 

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if(this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }

  }

  isActive(page: PageInterface) {

    let childNav = this.nav.getActiveChildNav();

    if(childNav) {
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

 

}
