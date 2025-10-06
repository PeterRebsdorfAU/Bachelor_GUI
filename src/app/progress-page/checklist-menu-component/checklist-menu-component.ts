import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-checklist-menu-component',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, MatListModule, MatIconModule],
  templateUrl: './checklist-menu-component.html',
  styleUrl: './checklist-menu-component.scss'
})
export class ChecklistMenuComponent {
  @Input() sections: any[] = [];
  @Output() itemSelected = new EventEmitter<any>();

  selectItem(item: any) {
    this.itemSelected.emit(item);
  }

  allSubItemsChecked(item: any): boolean {
    return !!item.isChecked;
  }
}
