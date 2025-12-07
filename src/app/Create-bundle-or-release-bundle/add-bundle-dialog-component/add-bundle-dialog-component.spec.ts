import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBundleDialogComponent } from './add-bundle-dialog-component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AddBundleDialogComponent', () => {
  let component: AddBundleDialogComponent;
  let fixture: ComponentFixture<AddBundleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBundleDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBundleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
