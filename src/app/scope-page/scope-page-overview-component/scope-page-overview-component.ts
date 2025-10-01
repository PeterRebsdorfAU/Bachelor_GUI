import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScopePageService } from '../scope-page-service';
import { Navbar } from '../../layout-design/navbar/navbar';
import { BundleScope } from '../scope-model';
import { SystemAddFormComponent } from '../system-add-form-component/system-add-form-component';
import { SystemListComponent } from '../system-list-component/system-list-component';
import { SystemEntry } from '../../models/system-entry';

@Component({
  selector: 'app-scope-page-overview-component',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    SystemAddFormComponent,
    SystemListComponent
  ],
  templateUrl: './scope-page-overview-component.html',
  styleUrl: './scope-page-overview-component.scss'
})
export class ScopePageOverviewComponent implements OnInit {
  bundleId!: number;
  scope?: BundleScope;

  constructor(
    private route: ActivatedRoute,
    private scopeService: ScopePageService
  ) {}

  ngOnInit(): void {
    this.bundleId = Number(this.route.snapshot.paramMap.get('bundleId'));
    this.loadScope();
  }

  private loadScope() {
    this.scopeService.getScope(this.bundleId)
      .subscribe(s => this.scope = s);
  }

  onAddSystem(system: SystemEntry) {
    this.scopeService.addSystem(this.bundleId, system)
      .subscribe(updated => this.scope = updated);
  }

  onDeleteSystem(system: SystemEntry) {
    this.scopeService.deleteSystem(this.bundleId, system.name)
      .subscribe(updated => this.scope = updated);
  }
}
