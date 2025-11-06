import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Bundle } from '../../Models/release-bundle.model';
import { ReleaseBundleItemComponent } from '../release-bundle-item-component/release-bundle-item-component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-release-bundle-list-component',
  standalone: true,
  imports: [ReleaseBundleItemComponent, NgForOf, NgIf],
  templateUrl: './release-bundle-list-component.html',
  styleUrl: './release-bundle-list-component.scss'
})
export class ReleaseBundleListComponent {
  @Input() bundles: Bundle[] = [];
  @Output() bundleSelected = new EventEmitter<Bundle>();

  onBundleSelected(bundle: Bundle) {
    this.bundleSelected.emit(bundle);
  }
}
