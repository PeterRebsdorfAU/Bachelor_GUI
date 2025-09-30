import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-header-component',
  standalone: true,
  imports: [],
  templateUrl: './progress-header-component.html',
  styleUrl: './progress-header-component.scss'
})
export class ProgressHeaderComponent {
  @Input() bundleName: string = '';

}

