import { Component, Input } from '@angular/core';
import {ProgressBarComponent} from '../progress-bar-component/progress-bar-component';

@Component({
  selector: 'app-system-progress-component',
  standalone: true,
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './system-progress-component.html',
  styleUrl: './system-progress-component.scss'
})
export class SystemProgressComponent {
  @Input() system: any;
}
