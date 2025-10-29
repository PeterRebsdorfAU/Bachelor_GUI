import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PlannedRelease } from '../../models/planned-release';

@Component({
  selector: 'app-system-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './system-list-component.html',
  styleUrl: './system-list-component.scss'
})
export class SystemListComponent {
  @Input() systems: PlannedRelease[] = [];
  @Output() deleteSystem = new EventEmitter<string>();
}
