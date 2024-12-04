import { DecimalPipe } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { IonIcon, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [IonText, IonIcon, IonLabel, IonThumbnail, IonItem, DecimalPipe ],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent  implements OnInit {

  restaurant = input.required<any>();

  constructor() { }

  ngOnInit() {}

  getCuisine(cuisines: string[]) {
    return cuisines.join(', ');
  }

}
