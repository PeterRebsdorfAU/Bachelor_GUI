import {Component, Input} from '@angular/core';
import {ActivatedRoute, Routes} from '@angular/router';

@Component({
  selector: 'app-progress-overview',
  imports: [],
  templateUrl: './progress-overview.html',
  styleUrl: './progress-overview.scss'
})
export class ProgressOverviewComponent {
  @Input() releaseBundleID!: string
  bundleId: number;

  constructor(private route: ActivatedRoute) {
    this.bundleId = Number(this.route.snapshot.paramMap.get('bundleId'));
  }

}
