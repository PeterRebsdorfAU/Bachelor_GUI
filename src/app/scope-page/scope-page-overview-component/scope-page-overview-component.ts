import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScopePageService } from '../scope-page-service';
import {Navbar} from '../../layout-design/navbar/navbar';

@Component({
  selector: 'app-scope-page-overview-component',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './scope-page-overview-component.html',
  styleUrl: './scope-page-overview-component.scss'
})
export class ScopePageOverviewComponent implements OnInit {
  bundleId!: number;
  systems: string[] = [];
  newSystem = '';

  constructor(
    private route: ActivatedRoute,
    private scopeService: ScopePageService
  ) {}

  ngOnInit(): void {
    this.bundleId = Number(this.route.snapshot.paramMap.get('bundleId'));
    this.loadSystems();
  }

  loadSystems() {
    this.scopeService.getSystems(this.bundleId).subscribe((s: string[]) => this.systems = s);
  }

  addSystem() {
    if (!this.newSystem.trim()) return;
    this.scopeService.addSystem(this.bundleId, this.newSystem).subscribe((s: string[]) => {
      this.systems = s;
      this.newSystem = '';
    });
  }

  deleteSystem(system: string) {
    this.scopeService.deleteSystem(this.bundleId, system).subscribe((s: string[]) => this.systems = s);
  }
}
