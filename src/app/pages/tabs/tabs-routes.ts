import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SearchPage } from './search/search.page';
import { CartPage } from './cart/cart.page';
import { AccountPage } from './account/account.page';
import { TabsPage } from './tabs.page';

export const TABS_ROUTES: Routes = [
  
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'cart',
        component: CartPage,
      },
      {
        path: 'account',
        component: AccountPage,
      },
    ]
  },
  
];
