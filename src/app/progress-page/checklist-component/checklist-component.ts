import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-checklist-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './checklist-component.html',
  styleUrl: './checklist-component.scss'
})
export class ChecklistComponent {
  @Input() checklist: string[] = [];

}
