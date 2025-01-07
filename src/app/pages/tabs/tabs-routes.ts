import { Routes } from '@angular/router';
import { SearchPage } from './search/search.page';
import { CartPage } from './cart/cart.page';
import { AccountPage } from './account/account.page';
import { TabsPage } from './tabs.page';
import { HomePage } from './home/home.page';
import { ItemsPage } from './items/items.page';

export const TABS_ROUTES: Routes = [  
  {
    path: '',
    component: TabsPage,    
    children: [      
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
      }      
    ]
  },
  {
    path: 'restaurant/:restaurantId',
    component: ItemsPage
  }
  
];
