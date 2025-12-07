import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopePageOverviewComponent } from './scope-page-overview-component';
import {importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ScopePageOverviewComponent', () => {
  let component: ScopePageOverviewComponent;
  let fixture: ComponentFixture<ScopePageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopePageOverviewComponent,
      HttpClientTestingModule],
      providers: [
        importProvidersFrom(),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ScopePageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
