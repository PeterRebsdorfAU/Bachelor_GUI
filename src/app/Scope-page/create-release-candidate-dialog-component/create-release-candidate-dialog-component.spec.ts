import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CreateReleaseCandidateDialogComponent } from './create-release-candidate-dialog-component';

describe('CreateReleaseCandidateDialogComponent', () => {
  let component: CreateReleaseCandidateDialogComponent;
  let fixture: ComponentFixture<CreateReleaseCandidateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReleaseCandidateDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateReleaseCandidateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
