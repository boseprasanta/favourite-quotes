import { Component } from '@angular/core';
import { Platform,NavController,MenuController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { SettingsPage } from "../pages/settings/settings";
// import { FavouritesPage } from '../pages/favourites/favourites';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  tabsPage = TabsPage;
  settingsPage = SettingsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  @ViewChild('nav') nav : NavController ;

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

