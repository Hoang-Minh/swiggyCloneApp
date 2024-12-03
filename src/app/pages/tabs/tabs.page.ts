import { Component, OnInit } from '@angular/core';
//import { IonIcon } from '@ionic/angular';
import {
  IonTabButton,
  IonIcon,
  IonTabBar,
  IonTabs,
  IonTab,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  fastFoodOutline,
  information,
  library,
  playCircle,
  radio,
  search,
  searchOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabButton,
    IonIcon,
    IonTabBar,
    IonTabs,
    IonTab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel
  ],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({ information, cartOutline, searchOutline, fastFoodOutline });
  }

  ngOnInit() {
    console.log('Hello');
  }
}
