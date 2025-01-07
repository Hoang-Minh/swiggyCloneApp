import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  NavController,
  IonRow,
  IonGrid,
  IonLabel,
  IonText,
  IonCol,
  IonIcon,
  IonList,
  IonListHeader,
  IonThumbnail,
  IonItem
} from '@ionic/angular/standalone';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    IonButtons,
    IonRow,
    IonGrid,
    IonLabel,
    IonText,
    IonCol,
    IonIcon,
    IonList,
    IonListHeader,
    IonThumbnail,
    IonItem
  ],
})
export class ItemsPage implements OnInit {

  id!: string;
  data!: Restaurant;
  veg: boolean = false;

  protected readonly restaurantService = inject(RestaurantService);
  private readonly route = inject(ActivatedRoute);
  private readonly navCtrl = inject(NavController);

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap) => {

      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }

      this.id = paramMap.get('restaurantId')!;
      this.getItem();
    });
  }

  getItem() {
    this.data = this.restaurantService.getRestaurant.find((restaurant) => restaurant.uid === this.id)!;
    console.log("data", this.data);
  }

  vegOnly(event) {
    console.log(event.detail.checked);
  }
}
