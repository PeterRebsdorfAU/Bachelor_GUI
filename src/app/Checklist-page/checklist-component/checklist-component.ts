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
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { NotificationPopoverComponent } from '../notification-dialog-component/notification-popover-component';

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
    MatIconModule,
    NotificationPopoverComponent
  ],
  templateUrl: './checklist-component.html',
  styleUrls: ['./checklist-component.scss']
})
export class ChecklistComponent {
  @Input() item!: Checklist;
  @Input() bundleReleaseName: string = '';
  @Output() checklistUpdated = new EventEmitter<Checklist>();

  expandedPanels = new Set<number>();

  // Notification popover properties
  showNotificationPopover = false;
  activeItemId: number | null = null;
  pendingNotificationItem: {
    description: string;
    checklistName: string;
    subChecklistName: string;
    bundleReleaseName: string;
  } | null = null;

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
    return this.userRole === UserRole.ReleaseManager ||
      this.userRole === UserRole.TestManager ||
      this.userRole === UserRole.Developer;
  }

  toggleItem(sub: SubChecklist, item: ChecklistItem) {
    if (!this.canToggle()) {
      return; // Prevent toggle if user doesn't have permission
    }

    // IMPORTANT: item.isCompleted has already been toggled by ngModel
    // So if it's now true, it was just marked as complete
    const isNowCompleted = item.isCompleted;

    // Show notification popover only when marking as complete
    if (isNowCompleted) {
      this.activeItemId = item.checklistItemID;
      this.pendingNotificationItem = {
        description: item.description,
        checklistName: this.item.name,
        subChecklistName: sub.name,
        bundleReleaseName: this.bundleReleaseName
      };
      this.showNotificationPopover = true;
    }

    // Update the item on the server
    this.progressService.toggleChecklistItem(item.checklistItemID)
      .subscribe({
        next: () => {
          // Update local counts immediately for responsive UI
          sub.completedItems = this.completedItemsCount(sub);
          sub.isCompleted = sub.completedItems === sub.totalItems;

          const totalCompleted = this.item.subChecklists.reduce((acc, s) => acc + (s.completedItems || 0), 0);
          const totalItems = this.item.subChecklists.reduce((acc, s) => acc + (s.totalItems || 0), 0);
          this.item.isCompleted = totalCompleted === totalItems;

          this.item.completedSubChecklists = this.item.subChecklists.filter(s => s.isCompleted).length;

          // Emit to parent to refresh from server
          this.checklistUpdated.emit(this.item);
        },
        error: () => console.error('Failed to update item state on server')
      });
  }

  onNotificationPopoverClosed() {
    this.showNotificationPopover = false;
    this.activeItemId = null;
    this.pendingNotificationItem = null;
  }

  isPopoverActiveForItem(itemId: number): boolean {
    return this.showNotificationPopover && this.activeItemId === itemId;
  }

  private syncChecklistSubCompletion() {
    if (!this.item || !Array.isArray(this.item.subChecklists)) return;
    const completedSubs = this.item.subChecklists.filter(s => s.isCompleted).length;
    this.item.completedSubChecklists = completedSubs;
    this.item.isCompleted = completedSubs >= (this.item.totalSubChecklists || this.item.subChecklists.length);
  }

  checklistProgressPercentage(): number {
    if (!this.item) return 0;
    const total = this.item.subChecklists.reduce((acc, s) => acc + (s.totalItems || 0), 0);
    if (total === 0) return 0;
    const completed = this.item.subChecklists.reduce((acc, s) => acc + (s.completedItems || 0), 0);
    return Math.round((completed / total) * 100);
  }

  shouldShowDetailedDescription(item: ChecklistItem): boolean {
    // If no detailed description, don't show
    if (!item.detailedDescription || item.detailedDescription.trim() === '') {
      return false;
    }

    // If no role specified on the item, show to everyone
    if (item.role === null || item.role === undefined) {
      return true;
    }

    // If user is not logged in (Guest), don't show
    if (this.userRole === null || this.userRole === UserRole.Guest) {
      return false;
    }

    // Parse the role from the database (could be string or number)
    const itemRoleNumber = typeof item.role === 'number'
      ? item.role
      : (typeof item.role === 'string' ? parseInt(item.role, 10) : NaN);

    // Check if user's role matches the item's role
    return !isNaN(itemRoleNumber) && this.userRole === itemRoleNumber;
  }
}
