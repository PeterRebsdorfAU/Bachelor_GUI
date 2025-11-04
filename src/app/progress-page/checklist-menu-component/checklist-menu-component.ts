import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {NgFor, NgIf} from '@angular/common';
import {Checklist} from '../../models/checklist.model';

@Component({
  selector: 'app-checklist-menu-component',
  templateUrl: './checklist-menu-component.html',
  imports: [
    MatIcon,
    MatNavList,
    MatListItem,
    NgFor,
    NgIf
  ],
  styleUrls: ['./checklist-menu-component.scss']
})
export class ChecklistMenuComponent {
  @Input() checklists: Checklist[] = [];
  @Input() selectedItem: Checklist | null = null;
  @Output() itemSelected = new EventEmitter<Checklist>();

  selectItem(item: Checklist) {
    this.itemSelected.emit(item);
  }
}
