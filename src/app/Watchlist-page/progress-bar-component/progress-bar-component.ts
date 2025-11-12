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
}
