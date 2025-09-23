import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-input-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-input-component.html',
  styleUrl: './multi-input-component.scss'
})
export class MultiInputComponent {
  @Input() placeholder = 'Add item';
  @Input() values: string[] = [];
  @Output() valuesChange = new EventEmitter<string[]>();

  currentValue = '';

  addValue() {
    if (this.currentValue.trim()) {
      this.values = [...this.values, this.currentValue.trim()];
      this.valuesChange.emit(this.values);
      this.currentValue = '';
    }
  }

  removeValue(index: number) {
    this.values = this.values.filter((_, i) => i !== index);
    this.valuesChange.emit(this.values);
  }
}

