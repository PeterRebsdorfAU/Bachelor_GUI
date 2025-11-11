import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from '../../Navbar/navbar';
import { ProgressOverviewService } from '../progress-overview-service';
import { NgIf } from '@angular/common';
import { UserRole } from '../../user-role.enum';
import { LoginService } from '../../Login/login-service';
import { ProgressHeaderComponent } from '../progress-header-component/progress-header-component';
import { ChecklistComponent } from '../checklist-component/checklist-component';
import { ActionButtonsComponent } from '../action-buttons-component/action-buttons-component';
import { ChecklistMenuComponent } from '../checklist-menu-component/checklist-menu-component';
import {Checklist, ChecklistResponse} from '../../Models/checklist.model';

@Component({
  selector: 'app-progress-overview',
  standalone: true,
  imports: [
    Navbar,
    NgIf,
    ProgressHeaderComponent,
    ChecklistComponent,
    ActionButtonsComponent,
    ChecklistMenuComponent
  ],
  templateUrl: './progress-overview.html',
  styleUrls: ['./progress-overview.scss']
})
export class ProgressOverviewComponent {
  bundleId: number;
  bundleName = '';
  checklist: Checklist[] = [];
  selectedChecklist: Checklist | null = null;
  loading = true;
  error: string | null = null;
  userRole: UserRole;
  protected readonly UserRole = UserRole;

  constructor(
    private route: ActivatedRoute,
    private progressService: ProgressOverviewService,
    private loginService: LoginService
  ) {
    this.bundleId = Number(this.route.snapshot.paramMap.get('bundleId'));
    this.loadChecklist();
    this.userRole = loginService.getUser() || UserRole.Guest;
  }

  onChecklistUpdated() {
    const currentId = this.selectedChecklist?.checklistID;

    this.progressService.getChecklists(this.bundleId).subscribe({
      next: (data: ChecklistResponse) => {
        this.checklist = data.checklists?.sort((a, b) => a.order - b.order) || [];

        if (currentId) {
          const found = this.checklist.find(c => c.checklistID === currentId);
          this.selectedChecklist = found || this.checklist[0];
        } else {
          this.selectedChecklist = this.checklist[0];
        }
      }
    });
  }

  loadChecklist() {
    this.progressService.getChecklists(this.bundleId).subscribe({
      next: (data: ChecklistResponse) => {
        // tag checklists fra response
        this.checklist = data.checklists?.sort((a: { order: number; }, b: { order: number; }) => a.order - b.order) || [];
        this.loading = false;
        if (this.checklist.length > 0) {
          this.selectedChecklist = this.checklist[0];
          this.bundleName = data.bundleReleaseName;
        }
      },
      error: () => {
        this.error = 'Kunne ikke hente checklisten';
        this.loading = false;
      }
    });
  }

  onMenuSelect(item: Checklist) {
    this.selectedChecklist = item;
  }
}
