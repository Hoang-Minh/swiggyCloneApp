import { Injectable } from '@angular/core';
import { Category, FoodItem, Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly restaurants: Restaurant[] = [
    {
      uid: '165efd',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
      address: 'Westminster, CA 92683',
    },
    {
      uid: '871cac',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
      address: 'Anaheim, CA 92801',
    },
    {
      uid: '586egp',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
      address: 'Fountain Valley, CA 92701',
    },
  ];

  // food items
  private readonly foodItems: FoodItem[] = [
    {
      categoryId: 'e00',
      cover: 'assets/imgs/pizza.jpg',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
    {
      categoryId: 'e01',
      cover: 'assets/imgs/salad.jpg',
      desc: 'Great in taste',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: true,
    },
    {
      categoryId: 'e00',
      cover: 'assets/imgs/pasta.jpg',
      desc: 'Great in taste',
      id: 'i3',
      name: 'Pasta',
      price: 150.5,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
  ];

  // food categories
  private readonly categories: Category[] = [
    {
      id: 'e00',
      name: 'Italian',
      uid: '165efd',
    },
    {
      id: 'e01',
      name: 'Mexican',
      uid: '165efd',
    },
  ];

  constructor() {}

  get getRestaurant(): Restaurant[] {
    return this.restaurants;
  }

  get getCategories(): Category[] {
    return this.categories;
  }

  get getFoodItems(): FoodItem[] {
    return this.foodItems;
  }

  getCuisine(restaurant: Restaurant): string {
    return restaurant.cuisines.join(', ');
  }
}
