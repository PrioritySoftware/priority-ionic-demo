import { Component } from '@angular/core';

import { CustomersPage } from '../customers/customers.page';
import { OrdersPage } from '../orders/orders.page';
import { ItemsPage } from '../items/items.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CustomersPage;
  tab2Root = OrdersPage;
  tab3Root = ItemsPage;

  constructor() { }

}
