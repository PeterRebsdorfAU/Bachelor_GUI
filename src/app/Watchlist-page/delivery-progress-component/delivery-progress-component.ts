import { Component, Input } from '@angular/core';
import {ProgressBarComponent} from '../progress-bar-component/progress-bar-component';

@Component({
  selector: 'app-delivery-progress-component',
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './delivery-progress-component.html',
  styleUrl: './delivery-progress-component.scss'
})
export class DeliveryProgressComponent {
  @Input() delivery: any;
}
