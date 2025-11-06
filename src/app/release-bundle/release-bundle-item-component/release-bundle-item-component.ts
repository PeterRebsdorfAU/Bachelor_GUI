import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Bundle } from '../../models/release-bundle.model';

@Component({
  selector: 'app-release-bundle-item-component',
  standalone: true,
  imports: [],
  templateUrl: './release-bundle-item-component.html',
  styleUrl: './release-bundle-item-component.scss'
})
export class ReleaseBundleItemComponent {
  @Input() bundle!: Bundle;
  @Output() bundleSelected = new EventEmitter<Bundle>();

  onClick() {
    this.bundleSelected.emit(this.bundle);
  }
}
