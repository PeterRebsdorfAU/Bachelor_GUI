import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './progress-bar-component.html',
  styleUrls: ['./progress-bar-component.scss']
})
export class ProgressBarComponent {
  @Input() steps: string[] = [];
  @Input() currentStep: number = 0;
  @Input() small = false;

  get labelWidth(): number {
    if (!this.steps || this.steps.length <= 1) return 100;
    // give each label equal width across the bar
    return 100 / this.steps.length;
  }

  get filledWidth(): number {
    if (!this.steps || this.steps.length <= 1) return 0;
    const ratio = (this.currentStep) / (this.steps.length - 1);
    return Math.max(0, Math.min(100, ratio * 100));
  }

  tickPosition(index: number): number {
    if (!this.steps || this.steps.length <= 1) return 0;
    return (index / (this.steps.length - 1)) * 100;
  }
}
