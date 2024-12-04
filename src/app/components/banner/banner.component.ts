import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { IonRow, IonicSlides } from '@ionic/angular/standalone';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent  implements OnInit {

  swiperModules = [IonicSlides];
  bannerImages = input.required<any[]>();

  constructor() { }

  ngOnInit() {
    console.log("hello");
  }

}
