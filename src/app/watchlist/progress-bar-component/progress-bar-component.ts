
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
  @Input() currentStep: string = '';

  isCompleted(step: string): boolean {
    const currentIndex = this.steps.indexOf(this.currentStep);
    const stepIndex = this.steps.indexOf(step);
    return stepIndex <= currentIndex;
  }
}
