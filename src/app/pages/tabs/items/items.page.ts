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
  IonItem,
  IonToggle,
  IonFooter,
  IonButton
} from '@ionic/angular/standalone';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Category, FoodItem, Restaurant } from 'src/app/models/restaurant.model';
import { star, removeOutline, addOutline, cart, basketOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


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
    IonItem,
    IonToggle,
    IonFooter,
    IonButton
  ],
})
export class ItemsPage implements OnInit {

  id!: string;
  data!: Restaurant;
  veg: boolean = false;
  categories: Category[] = [];
  foodItems: FoodItem[] = [];

  protected readonly restaurantService = inject(RestaurantService);
  private readonly route = inject(ActivatedRoute);
  private readonly navCtrl = inject(NavController);

  ngOnInit() {

    addIcons({ star, addOutline, removeOutline, basketOutline });
    this.route.paramMap.subscribe((paramMap) => {

      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }

      this.id = paramMap.get('restaurantId')!;
      console.log("id", this.id);
      this.getItem();
      this.getCategories();
      
    });
  }

  getItem() {
    this.data = this.restaurantService.getRestaurant.find((restaurant) => restaurant.uid === this.id)!;
    this.getFoodItems(this.id);
  }

  getCategories(): void {
    this.categories = this.restaurantService.getCategories.filter((category) => category.uid === this.id);
  }

  getFoodItems(id: string): void {
    this.foodItems = this.restaurantService.getRestaurantFoodItems(id);    
    console.log("food items", this.foodItems);
  }

  vegOnly(event) {
    console.log(event.detail.checked);
  }

  removeItem(item: FoodItem, index: number) {
    this.foodItems[index].quantity--;
    console.log("Food items", this.foodItems);
  }

  addItem(item: FoodItem, index: number) {
    this.foodItems[index].quantity++;
    console.log("Food items", this.foodItems);
  }
}

