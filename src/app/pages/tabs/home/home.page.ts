import { Component, OnInit } from '@angular/core';
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
  restaurants: any[] = [];
  isLoading: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        { banner: 'assets/imgs/1.jpg', id: 1 },
        { banner: 'assets/imgs/2.jpg', id: 2 },
        { banner: 'assets/imgs/3.jpg', id: 3 },
      ];

      this.restaurants = [
        {
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: ['Italian', 'Mexican'],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
        },
        {
          cover: 'assets/imgs/2.jpg',
          name: 'Stayfit1',
          short_name: 'stayfit1',
          cuisines: ['Italian', 'Mexican'],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
        },
        {
          cover: 'assets/imgs/3.jpg',
          name: 'Stayfit2',
          short_name: 'stayfit2',
          cuisines: ['Italian', 'Mexican'],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
        },
      ];
      this.isLoading = false;
    }, 2000);
  }
}
