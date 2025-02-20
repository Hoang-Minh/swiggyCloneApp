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
import { ActivatedRoute, Router } from '@angular/router';
import { CartData, Category, FoodItem, Restaurant } from 'src/app/models/restaurant.model';
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
  restaurant!: Restaurant;
  isVegan: boolean = false;
  categories: Category[] = [];
  foodItems: FoodItem[] = [];
  cartData: CartData;

  protected readonly restaurantService = inject(RestaurantService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
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

      //TODO: need not to reset cart data
      this.cartData = { items: [], totalItems: 0, totalPrice: 0 };
      this.getRestaurantItem();      
    });
  }

  getRestaurantItem() {    

    this.restaurant = this.restaurantService.getRestaurant.find((restaurant) => restaurant.uid === this.id)!; // get restaurant data
    this.foodItems = this.getFoodItems(this.id); // get food items
    this.categories = this.getCategories(); // get categories
  }

  getCategories(): Category[] {
    return this.restaurantService.getCategories.filter((category) => category.uid === this.id);
  }

  getFoodItems(id: string): FoodItem[] {    
    return this.restaurantService.getRestaurantFoodItems(id, this.isVegan);        
  }

  vegOnly(event) {

    this.isVegan = event.detail.checked as boolean;
    this.foodItems = this.getFoodItems(this.id); // get food items
  }

  removeItem(item: FoodItem, index: number): void {

    if(this.foodItems[index].quantity === 0) return;
    this.foodItems[index].quantity--;    
    this.calculate();
  } 

  addItem(item: FoodItem, index: number): void {
    this.foodItems[index].quantity++;    
    this.calculate();
  }

  calculate(): void {

    this.cartData.items = this.foodItems.filter((item) => item.quantity > 0);
    this.cartData.totalItems = this.cartData.items.reduce((acc, item) => acc + item.quantity, 0);
    this.cartData.totalPrice = this.cartData.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    console.log("cart data", this.cartData);    
  }

  viewCart(): void {
    if(this.cartData.totalItems === 0) return; // TODO: still go to cart and show no items
    this.saveToCart();
    //this.router.navigate(['/', 'tabs', 'cart', this.id]);
  }

  saveToCart(): void {
    
    //this.cartData.items = [];

  }
}

