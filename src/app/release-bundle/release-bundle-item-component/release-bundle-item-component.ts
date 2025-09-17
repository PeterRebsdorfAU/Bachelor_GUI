import { Component, Input } from '@angular/core';
import { ReleaseBundle } from '../ release-bundle.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-release-bundle-item-component',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './release-bundle-item-component.html',
  styleUrl: './release-bundle-item-component.scss'
})
export class ReleaseBundleItemComponent {
  @Input() bundle!: ReleaseBundle;

}
