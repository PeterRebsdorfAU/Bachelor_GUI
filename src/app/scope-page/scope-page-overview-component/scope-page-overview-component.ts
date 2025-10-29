import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScopePageService } from '../scope-page-service';
import { Navbar } from '../../layout-design/navbar/navbar';
import { BundleScope } from '../../models/bundle-scope';
import {SystemListComponent} from '../system-list-component/system-list-component';
import {SystemAddFormComponent} from '../system-add-form-component/system-add-form-component';
import {PlannedRelease} from '../../models/planned-release';

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
    private scopeService: ScopePageService
  ) {}

  ngOnInit(): void {
    this.bundleName = 'testRelease'; // String(this.route.snapshot.paramMap.get('bundleName'));
    this.loadScope();
  }

  private loadScope() {
    this.scopeService.getScope(this.bundleName)
      .subscribe(s => this.scope = s);
  }

  onAddSystem(systemName: string, version: string) {
    this.scopeService.addSystemToBundle(this.bundleName, systemName, version)
      .subscribe(scope => this.scope = scope);
  }

  onDeleteSystem(plannedReleaseName: string) {
    this.scopeService.removeSystemFromBundle(this.bundleName, plannedReleaseName)
      .subscribe(scope => this.scope = scope);
  }
}
