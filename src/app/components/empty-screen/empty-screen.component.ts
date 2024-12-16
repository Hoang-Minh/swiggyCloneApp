import { Component, Input, OnInit } from '@angular/core';
import { IonCol, IonGrid, IonIcon, IonLabel, IonRow, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-empty-screen',
  standalone: true,
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
  imports: [IonText, IonLabel, IonCol, IonRow, IonIcon, IonGrid]
})
export class EmptyScreenComponent  implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {}

}
