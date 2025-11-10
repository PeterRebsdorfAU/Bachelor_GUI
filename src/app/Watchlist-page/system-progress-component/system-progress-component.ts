import { Component, Input, OnInit } from '@angular/core';
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
export class SystemProgressComponent implements OnInit {
  @Input() systemRelease!: PlannedRelease;

  progressValue: number = 0;
  progressColor: string = 'warn';

  ngOnInit(): void {
    this.progressValue = this.calculateProgressValue();
    this.progressColor = this.calculateProgressColor();
  }

  private calculateProgressValue(): number {
    const statusMap: { [key: string]: number } = {
      'RP': 0,
      'TRE': 25,
      'TCE': 50,
      'WPE': 75,
      'RD': 100
    };
    return statusMap[this.systemRelease.statusText] || 0;
  }

  private calculateProgressColor(): string {
    if (this.progressValue === 100) return 'accent';
    if (this.progressValue >= 50) return 'primary';
    return 'warn';
  }
}
