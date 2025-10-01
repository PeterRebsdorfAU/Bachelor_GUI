import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from '../../layout-design/navbar/navbar';
import { ProgressOverviewService } from '../progress-overview-service';
import { ChecklistResponse } from '../progress-overview.model';
import { NgIf } from '@angular/common';
import {UserRole} from '../../user-role.enum';
import {UserService} from '../../user-service/user';
import {ProgressHeaderComponent} from '../progress-header-component/progress-header-component';
import {ChecklistComponent} from '../checklist-component/checklist-component';
import {ActionButtonsComponent} from '../action-buttons-component/action-buttons-component';

@Component({
  selector: 'app-progress-overview',
  standalone: true,
  imports: [Navbar, NgIf, ProgressHeaderComponent, ChecklistComponent, ActionButtonsComponent],
  templateUrl: './progress-overview.html',
  styleUrls: ['./progress-overview.scss']
})
export class ProgressOverviewComponent {
  bundleId: number;
  bundleName: string = '';
  checklist: string[] = [];
  loading = true;
  error: string | null = null;
  userRole: UserRole;

  constructor(
    private route: ActivatedRoute,
    private progressService: ProgressOverviewService,
    private userService: UserService
  ) {
    this.bundleId = Number(this.route.snapshot.paramMap.get('bundleId'));
    this.loadChecklist();
    this.userRole = userService.getUser() || UserRole.Guest;
  }

  loadChecklist() {
    this.progressService.getChecklist(this.bundleId).subscribe({
      next: (data: ChecklistResponse) => {
        this.bundleName = data.name;
        this.checklist = data.checklist;
        this.loading = false;
      },
      error: () => {
        this.error = 'Kunne ikke hente checklisten';
        this.loading = false;
      }
    });
  }

  protected readonly UserRole = UserRole;

  onClickScopePage() {
    this.progressService.navigateToScopePage(this.bundleId);
  }

  onClickWatchListPage() {
    this.progressService.navigateToWatchlistPage();
  }
}
