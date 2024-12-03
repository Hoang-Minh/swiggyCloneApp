import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SearchPage } from './search/search.page';
import { CartPage } from './cart/cart.page';
import { AccountPage } from './account/account.page';

export const TABS_ROUTES: Routes = [
  
  {
    path: 'home',
    component: HomePage,
  },
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
];
