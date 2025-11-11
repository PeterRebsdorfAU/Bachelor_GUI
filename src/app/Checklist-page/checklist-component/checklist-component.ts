import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Checklist, SubChecklist, ChecklistItem } from '../../Models/checklist.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ProgressOverviewService } from '../progress-overview-service';
import { LoginService } from '../../Login/login-service';
import { UserRole } from '../../user-role.enum';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-checklist-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCheckboxModule,
    FormsModule,
    MatIcon
  ],
  templateUrl: './checklist-component.html',
  styleUrls: ['./checklist-component.scss']
})
export class ChecklistComponent {
  @Input() item!: Checklist;
  @Output() checklistUpdated = new EventEmitter<Checklist>();

  expandedPanels = new Set<number>();

  userRole: UserRole | null;
  readonly UserRole = UserRole;

  constructor(
    private progressService: ProgressOverviewService,
    private loginService: LoginService
  ) {
    this.userRole = this.loginService.getUser();
  }

  completedItemsCount(sub: SubChecklist): number {
    return sub.items.filter(i => i.isCompleted).length;
  }

  subChecklistPercentage(sub: SubChecklist): number {
    if (!sub.totalItems || sub.totalItems === 0) return 0;
    return Math.round((this.completedItemsCount(sub) / sub.totalItems) * 100);
  }

  onPanelToggle(sub: SubChecklist, isExpanded: boolean) {
    if (isExpanded) {
      this.expandedPanels.add(sub.subChecklistID);
    } else {
      this.expandedPanels.delete(sub.subChecklistID);
    }
  }

  isPanelExpanded(sub: SubChecklist): boolean {
    return this.expandedPanels.has(sub.subChecklistID);
  }

  canToggle(): boolean {
    return this.userRole !== UserRole.Guest;
  }

  toggleItem(sub: SubChecklist, item: ChecklistItem) {
    if (!this.canToggle()) {
      return;
    }

    this.progressService.toggleChecklistItem(item.checklistItemID)
      .subscribe({
        next: () => {
          sub.completedItems = this.completedItemsCount(sub);
          sub.isCompleted = sub.completedItems === sub.totalItems;

          const totalCompleted = this.item.subChecklists.reduce(
            (acc, s) => acc + (s.completedItems || 0), 0);
          const totalItems = this.item.subChecklists.reduce(
            (acc, s) => acc + (s.totalItems || 0), 0);
          this.item.isCompleted = totalCompleted === totalItems;

          this.item.completedSubChecklists = this.item.subChecklists.filter(s => s.isCompleted).length;

          this.checklistUpdated.emit(this.item);
        },
        error: () => console.error('Failed to update item state on server')
      });
  }

  checklistProgressPercentage(): number {
    if (!this.item) return 0;
    const total = this.item.subChecklists.reduce(
      (acc, s) => acc + (s.totalItems || 0), 0);
    if (total === 0) return 0;
    const completed = this.item.subChecklists.reduce(
      (acc, s) => acc + (s.completedItems || 0), 0);
    return Math.round((completed / total) * 100);
  }

  shouldShowDetailedDescription(item: ChecklistItem): boolean {
    if (!item.detailedDescription || item.detailedDescription.trim() === '') {
      return false;
    }

    if (item.role === null || item.role === undefined) {
      return true;
    }

    if (this.userRole === null || this.userRole === UserRole.Guest) {
      return false;
    }

    return this.userRole === item.role;
  }
}
