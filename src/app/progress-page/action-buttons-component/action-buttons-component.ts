import { Component, Input } from '@angular/core';
import { ProgressOverviewService } from '../progress-overview-service';
import { UserRole } from '../../user-role.enum';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action-buttons-component',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatIconModule],
  templateUrl: './action-buttons-component.html',
  styleUrl: './action-buttons-component.scss'
})
export class ActionButtonsComponent {
  @Input() bundleId!: number;
  @Input() userRole!: UserRole;
  protected readonly UserRole = UserRole;

  constructor(private progressService: ProgressOverviewService) {}

  onClickScopePage() {
    this.progressService.navigateToScopePage(this.bundleId);
  }

  onClickWatchListPage() {
    this.progressService.navigateToWatchlistPage();
  }
}
