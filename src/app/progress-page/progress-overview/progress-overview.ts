import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from '../../layout-design/navbar/navbar';
import { ProgressOverviewService } from '../progress-overview-service';
import { ChecklistResponse } from '../progress-overview.model';
import { NgFor, NgIf } from '@angular/common';
import {UserRole} from '../../user-role.enum';
import {UserService} from '../../user-service/user';

@Component({
  selector: 'app-progress-overview',
  standalone: true,
  imports: [Navbar, NgIf, NgFor],
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
}
