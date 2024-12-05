import { Component, inject, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonList,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { LoadingRestaurantComponent } from 'src/app/components/loading-restaurant/loading-restaurant.component';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonListHeader,
    IonList,
    IonTitle,
    IonContent,
    IonToolbar,
    IonHeader,
    BannerComponent,
    RestaurantComponent,
    IonSkeletonText,
    LoadingRestaurantComponent
  ],
})
export class HomePage implements OnInit {
  
  banners: any[] = [];  
  isLoading: boolean = false;

  protected restaurantService = inject(RestaurantService);

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        { banner: 'assets/imgs/1.jpg', id: 1 },
        { banner: 'assets/imgs/2.jpg', id: 2 },
        { banner: 'assets/imgs/3.jpg', id: 3 },
      ];

      
      this.isLoading = false;
    }, 2000);
  }
}
