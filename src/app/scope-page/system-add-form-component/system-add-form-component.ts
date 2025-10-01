import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SystemModel } from '../system-model';

@Component({
  selector: 'app-system-add-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './system-add-form-component.html',
  styleUrl: './system-add-form-component.scss'
})
export class SystemAddFormComponent {
  @Input() bundleName = '';
  @Output() addSystem = new EventEmitter<SystemModel>();

  newSystem = '';
  newVersion = '';

  onSubmit() {
    if (this.newSystem.trim()) {
      this.addSystem.emit({
        name: this.newSystem,
        version: this.newVersion
      });
      this.newSystem = '';
      this.newVersion = '';
    }
  }
}
