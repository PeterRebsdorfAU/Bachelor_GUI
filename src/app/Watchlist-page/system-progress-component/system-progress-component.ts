import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlannedRelease } from '../../Models/bundle-release-monitoring.model';

@Component({
  selector: 'app-system-progress-component',
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  templateUrl: './system-progress-component.html',
  styleUrls: ['./system-progress-component.scss']
})
export class SystemProgressComponent {
  @Input() systemRelease!: PlannedRelease;

  getProgressValue(): number {
    // Map status to progress percentage
    const statusMap: { [key: string]: number } = {
      'RP': 0,    // Release Prepared
      'IBD': 25,  // In Build/Development
      'IUT': 50,  // In User Testing
      'IAT': 75,  // In Acceptance Testing
      'RD': 100   // Released/Done
    };
    return statusMap[this.systemRelease.statusText] || 0;
  }

  getProgressColor(): string {
    const progress = this.getProgressValue();
    if (progress === 100) return 'accent';
    if (progress >= 50) return 'primary';
    return 'warn';
  }
}
