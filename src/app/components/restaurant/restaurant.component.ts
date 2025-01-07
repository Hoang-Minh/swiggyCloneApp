import { DecimalPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { IonIcon, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/angular/standalone';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [IonText, IonIcon, IonLabel, IonThumbnail, IonItem, DecimalPipe ],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {

  restaurant = input.required<any>();

  protected readonly restaurantService = inject(RestaurantService);
}
