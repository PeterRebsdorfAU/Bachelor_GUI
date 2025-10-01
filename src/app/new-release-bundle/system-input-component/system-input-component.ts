// system-input.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemEntry } from '../../models/system-entry';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-system-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './system-input-component.html',
  styleUrls: ['./system-input-component.scss']
})
export class SystemInputComponent {
  @Input() systems: SystemEntry[] = [];
  @Output() systemsChange = new EventEmitter<SystemEntry[]>();

  newSystemName = '';
  newSystemVersion = '';

  addSystem() {
    if (this.newSystemName.trim()) {
      this.systems = [...this.systems, { name: this.newSystemName.trim(), version: this.newSystemVersion || undefined }];
      this.systemsChange.emit(this.systems);
      this.newSystemName = '';
      this.newSystemVersion = '';
    }
  }

  removeSystem(index: number) {
    this.systems = this.systems.filter((_, i) => i !== index);
    this.systemsChange.emit(this.systems);
  }
}
