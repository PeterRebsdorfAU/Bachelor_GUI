import { Component, Input } from '@angular/core';
import {ProgressBarComponent} from '../progress-bar-component/progress-bar-component';

@Component({
  selector: 'app-planned-bundle-release-component',
  standalone: true,
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './planned-bundle-release-component.html',
  styleUrl: './planned-bundle-release-component.scss'
})
export class PlannedBundleReleaseComponent {
  @Input() plannedBundle: any;
}
