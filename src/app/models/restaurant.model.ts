export interface Restaurant {
  cover: string;
  name: string;
  short_name: string;
  cuisines: string[];
  rating: number;
  delivery_time: number;
  distance: number;
  price: number;
  uid: string;
  address: string;
}

export interface Category {
  id: string;
  name: string;
  uid: string;
}

export interface FoodItem {
  categoryId: string;
  cover: string;
  desc: string;
  id: string;
  name: string;
  price: number;
  rating: number;
  status: boolean;
  uid: string;
  variation: boolean;
  veg: boolean;
  quantity: number;
}
