import { Component, Input } from '@angular/core';
import {ProgressBarComponent} from '../progress-bar-component/progress-bar-component';

@Component({
  selector: 'app-bundle-progress-component',
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './bundle-progress-component.html',
  styleUrl: './bundle-progress-component.scss'
})
export class BundleProgressComponent {
  @Input() bundle: any;
}
