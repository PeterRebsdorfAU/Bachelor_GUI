import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  @Input() bundleName!: string;
  @Output() addSystem = new EventEmitter<{ systemName: string; version: string }>();

  systemName = '';
  version = 'v1';

  onSubmit() {
    const name = this.systemName.trim();
    if (!name) return;

    this.addSystem.emit({
      systemName: name,
      version: this.version
    });

    this.systemName = '';
  }
}
