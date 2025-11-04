import { Component, Input } from '@angular/core';
import { Checklist } from '../../models/checklist.model';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-checklist-component',
  templateUrl: './checklist-component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgIf,
    CommonModule
  ],
  styleUrls: ['./checklist-component.scss']
})
export class ChecklistComponent {
  @Input() item!: Checklist;
}
