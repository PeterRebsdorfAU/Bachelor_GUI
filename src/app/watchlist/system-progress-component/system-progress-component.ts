import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar-component/progress-bar-component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-system-progress-component',
  standalone: true,
  imports: [ProgressBarComponent, NgIf],
  templateUrl: './system-progress-component.html',
  styleUrls: ['./system-progress-component.scss']
})
export class SystemProgressComponent {
  // Input is each plannedRelease object from API
  @Input() systemRelease: any;

  readonly systemSteps = ['RP','TRE','TCE','WPE','R'];

  get current(): number {
    if (!this.systemRelease) return 0;
    return (this.systemRelease.status ?? 0);
  }

  get arcText(): string {
    return this.systemRelease?.releaseCandidate ?? '';
  }
}
