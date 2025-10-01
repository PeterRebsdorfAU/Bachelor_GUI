import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SystemModel } from '../system-model';
import {SystemEntry} from '../scope-model';

@Component({
  selector: 'app-system-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './system-list-component.html',
  styleUrl: './system-list-component.scss'
})
export class SystemListComponent {
  @Input() systems: SystemModel[] = [];
  @Output() deleteSystem = new EventEmitter<SystemEntry>();
}
