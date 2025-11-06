import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-system-delete-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './system-delete-form-component.html',
  styleUrl: './system-delete-form-component.scss'
})
export class SystemDeleteFormComponent {
  @Input() plannedReleaseId!: number | undefined;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.plannedReleaseId);
  }
}
