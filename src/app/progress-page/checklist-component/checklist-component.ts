import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-checklist-component',
  standalone: true,
  imports: [NgFor, MatListModule],
  templateUrl: './checklist-component.html',
  styleUrl: './checklist-component.scss'
})
export class ChecklistComponent {
  @Input() checklist: string[] = [];

}
