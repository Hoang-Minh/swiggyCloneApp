import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, IonToolbar, IonSearchbar, IonListHeader, IonList } from '@ionic/angular/standalone';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/models/restaurant.model';
import { LoadingRestaurantComponent } from 'src/app/components/loading-restaurant/loading-restaurant.component';
import { RestaurantComponent } from "../../../components/restaurant/restaurant.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonList, IonSearchbar, IonContent, IonHeader, IonToolbar, IonLabel, IonListHeader, CommonModule, FormsModule, LoadingRestaurantComponent, RestaurantComponent]
})
export class SearchPage implements OnInit, AfterViewInit {

  //searchInput = viewChild.required<ElementRef<HTMLInputElement>>("searchInput");

  restaurants: Restaurant[];
  query: string;
  loading: boolean;
  
  @ViewChild("searchInput") searchInput;

  protected restaurantService = inject(RestaurantService);

  constructor() { }


  ngOnInit() {

  }

  onSearchChange(event: any) {
    this.query = event.detail.value.toLowerCase() as string;
    console.log("query");
    if (this.query.length > 0) {
      this.restaurants = this.restaurantService.getRestaurant.filter(x => x.short_name.includes(this.query));
      console.log("query", this.restaurants);
    }

  }

  ngAfterViewInit(): void {

  }

  ionViewDidEnter(): void {
    this.searchInput.setFocus();
  }

}
