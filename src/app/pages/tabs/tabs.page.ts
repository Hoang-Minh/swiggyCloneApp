import { Component, OnInit } from '@angular/core';
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
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  fastFoodOutline,
  information,  
  searchOutline,
} from 'ionicons/icons';
import { HomePage } from './home/home.page';

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
    IonLabel,
    IonBadge,
    HomePage
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
