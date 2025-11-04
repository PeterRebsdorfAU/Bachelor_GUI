import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScopePageService } from '../scope-page-service';
import { Navbar } from '../../layout-design/navbar/navbar';
import { BundleScope } from '../../models/bundle-scope';
import {SystemListComponent} from '../system-list-component/system-list-component';
import {SystemAddFormComponent} from '../system-add-form-component/system-add-form-component';
import {PlannedRelease} from '../../models/planned-release';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scope-page-overview-component',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    SystemListComponent,
    SystemAddFormComponent
  ],
  templateUrl: './scope-page-overview-component.html',
  styleUrl: './scope-page-overview-component.scss'
})
export class ScopePageOverviewComponent implements OnInit {
  bundleName!: string;
  scope?: BundleScope;

  constructor(
    private route: ActivatedRoute,
    private scopeService: ScopePageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.bundleName = 'testRelease'; // String(this.route.snapshot.paramMap.get('bundleName'));
    this.loadScope();
  }

  private loadScope() {
    this.scopeService.getScope(this.bundleName)
      .subscribe(s => this.scope = s);
  }

  showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: ['snackbar-error']
    });
  }

  onAddSystem(event: { systemName: string; version: string }) {
    this.scopeService.addSystemToBundle(this.bundleName, event.systemName, event.version)
      .subscribe({
        next: (updatedScope) => this.scope = updatedScope,
        error: () => this.showErrorMessage("Failed to add system. Try again.")
      });
  }


  onDeleteSystem(plannedReleaseName: string) {
    this.scopeService.removeSystemFromBundle(this.bundleName, plannedReleaseName)
      .subscribe(scope => this.scope = scope);
  }
}
