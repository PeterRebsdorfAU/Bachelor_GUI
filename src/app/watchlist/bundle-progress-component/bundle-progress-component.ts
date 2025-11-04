import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar-component/progress-bar-component';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-bundle-progress-component',
  standalone: true,
  imports: [ProgressBarComponent, ProgressBarComponent, DatePipe, NgIf],
  templateUrl: './bundle-progress-component.html',
  styleUrls: ['./bundle-progress-component.scss']
})
export class BundleProgressComponent {
  // expects the API object (bundleReleaseMonitoring) for the bundle
  @Input() bundleRelease: any;

  readonly bundleSteps = ['IBD','TRE','TCE','WPE','FIN'];

  get current(): number {
    if (!this.bundleRelease) return 0;
    // use calculatedStatus if present, otherwise status
    const s = (this.bundleRelease.calculatedStatus ?? this.bundleRelease.status);
    return isFinite(s) ? s : 0;
  }
}
