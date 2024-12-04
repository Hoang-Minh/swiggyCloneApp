import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList, IonSkeletonText, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading-restaurant',
  standalone: true,
  templateUrl: './loading-restaurant.component.html',
  imports: [IonLabel, IonSkeletonText, IonThumbnail, IonItem, IonList, NgFor],
  styleUrls: ['./loading-restaurant.component.scss'],
})
export class LoadingRestaurantComponent  implements OnInit {

  dummy = Array(10);

  constructor() { }

  ngOnInit() {}

}
