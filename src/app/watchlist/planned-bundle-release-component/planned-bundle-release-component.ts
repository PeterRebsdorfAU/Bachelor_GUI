import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar-component/progress-bar-component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-planned-bundle-release-component',
  standalone: true,
  imports: [ProgressBarComponent, NgIf],
  templateUrl: './planned-bundle-release-component.html',
  styleUrls: ['./planned-bundle-release-component.scss']
})
export class PlannedBundleReleaseComponent {
  @Input() plannedReleases: any[] | undefined;

  readonly plannedSteps = ['Bundle planned','Bundle ready to fill','Bundle finished'];

  // Because backend does not provide planned bundle status yet, we'll show current = 0
  get current(): number { return 0; }
}
