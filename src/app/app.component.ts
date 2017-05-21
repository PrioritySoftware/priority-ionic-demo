import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigurationService } from 'priority-ionic';


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  @ViewChild(Nav) nav : NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, configService: ConfigurationService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.setDir('ltr',true);
    });

    window['priorityReady'] = () => {
      configService.config({
        url: '',
        tabulaini: '****',
        language: 3,
        company: '****',
        appname: '',
        devicename: ''
      });
      configService.logIn('***','***').then(() =>
      {
        this.nav.setRoot(TabsPage);
      },(err) => {alert(err);});
    }

  }
}
