import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonToolbar,
  IonSearchbar,
  IonListHeader,
  IonList,
} from '@ionic/angular/standalone';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/models/restaurant.model';
import { LoadingRestaurantComponent } from 'src/app/components/loading-restaurant/loading-restaurant.component';
import { RestaurantComponent } from '../../../components/restaurant/restaurant.component';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonSearchbar,
    IonContent,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonListHeader,
    CommonModule,
    FormsModule,
    LoadingRestaurantComponent,
    RestaurantComponent,
    EmptyScreenComponent,
    RouterLink
  ],
})
export class SearchPage implements OnInit {
  restaurants: Restaurant[];
  query: string = "";
  isLoading: boolean;

  @ViewChild('searchInput') searchInput;
  model: any = {
    icon: "search-outline",
    title: "No Restaurants Found"
  }

  protected restaurantService = inject(RestaurantService);

  constructor() {}

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurant;
    this.isLoading = false;

    console.log("query", this.query);
  }

  onSearchChange(event: any) {
    this.isLoading = true;
    this.query = event.detail.value.toLowerCase() as string;

    if (this.query.length > 0) {
      this.restaurants = this.restaurantService.getRestaurant.filter((x) =>
        x.short_name.includes(this.query)
      );
      this.isLoading = false;
      
    } else {
      this.restaurants = this.restaurantService.getRestaurant;
      this.isLoading = false;
    }

    console.log("restaurants", this.restaurants);
  }

  ionViewDidEnter(): void {
    this.searchInput.setFocus();
  }
}
