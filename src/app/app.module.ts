import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PriorityIonicModule } from 'priority-ionic';

import { TabsPage } from '../pages/tabs/tabs';
import { CustomersPage } from '../pages/customers/customers.page';
import { OrdersPage } from '../pages/orders/orders.page';
import { ItemsPage } from '../pages/items/items.page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CustomersPage,
    OrdersPage,
    ItemsPage,
    TabsPage
  ],
  imports: [
    PriorityIonicModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomersPage,
    OrdersPage,
    ItemsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
