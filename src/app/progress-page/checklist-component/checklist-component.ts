import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChecklistItem } from '../../models/progress-overview.model';

@Component({
  selector: 'app-checklist-component',
  standalone: true,
  imports: [NgFor, MatCheckboxModule, FormsModule, NgIf],
  templateUrl: './checklist-component.html',
  styleUrl: './checklist-component.scss'
})
export class ChecklistComponent {
  @Input() item!: ChecklistItem;

}
