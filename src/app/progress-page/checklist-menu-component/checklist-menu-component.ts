import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-checklist-menu-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './checklist-menu-component.html',
  styleUrl: './checklist-menu-component.scss'
})
export class ChecklistMenuComponent {
  @Input() items: any[] = [];
  @Output() itemSelected = new EventEmitter<any>();

  selectItem(item: any) {
    this.itemSelected.emit(item);
  }
}
