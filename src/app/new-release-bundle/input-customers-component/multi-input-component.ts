import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatChip, MatChipListbox} from '@angular/material/chips';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-multi-input-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatLabel,
    MatFormFieldModule,
    MatListModule,
    MatChipListbox,
    MatChip,
    MatInput
  ],
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

