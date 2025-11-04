import { Component, Input } from '@angular/core';
import { Checklist, SubChecklist, ChecklistItem } from '../../models/checklist.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checklist-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './checklist-component.html',
  styleUrls: ['./checklist-component.scss']
})
export class ChecklistComponent {
  @Input() item!: Checklist;

  // Returner antal completed items i en subchecklist
  completedItemsCount(sub: SubChecklist): number {
    return sub.items.filter(i => !!i.isCompleted).length;
  }

  // Returner procent (0-100) for en subchecklist
  subChecklistPercentage(sub: SubChecklist): number {
    if (!sub.totalItems || sub.totalItems === 0) return 0;
    return Math.round((this.completedItemsCount(sub) / sub.totalItems) * 100);
  }

  // Toggle checkbox - kun UI (ingen API kald)
  toggleItem(sub: SubChecklist, item: ChecklistItem) {
    item.isCompleted = !item.isCompleted;
    // opdater completedItems felt for sub (lokalt)
    sub.completedItems = this.completedItemsCount(sub);

    // auto-mark sub as completed når alle items checked
    sub.isCompleted = sub.completedItems >= sub.totalItems;

    // opdatér checklist-level completedSubChecklists
    this.syncChecklistSubCompletion();
  }

  // Efter toggle: synk tallene på checklist niveau
  private syncChecklistSubCompletion() {
    if (!this.item || !Array.isArray(this.item.subChecklists)) return;
    const completedSubs = this.item.subChecklists.filter(s => s.isCompleted).length;
    this.item.completedSubChecklists = completedSubs;
    // sæt checklist isCompleted hvis alle subChecklists er done
    this.item.isCompleted = completedSubs >= (this.item.totalSubChecklists || this.item.subChecklists.length);
  }

  // Hjælper: return total progress for hele checklisten (baseret på items)
  checklistProgressPercentage(): number {
    if (!this.item) return 0;
    // beregn total items og completed items fra alle subChecklists
    const total = this.item.subChecklists.reduce((acc, s) => acc + (s.totalItems || 0), 0);
    if (total === 0) return 0;
    const completed = this.item.subChecklists.reduce((acc, s) => acc + (s.completedItems || 0), 0);
    return Math.round((completed / total) * 100);
  }
}
