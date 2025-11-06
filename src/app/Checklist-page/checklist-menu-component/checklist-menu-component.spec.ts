import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMenuComponent } from './checklist-menu-component';

describe('ChecklistMenuComponent', () => {
  let component: ChecklistMenuComponent;
  let fixture: ComponentFixture<ChecklistMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
