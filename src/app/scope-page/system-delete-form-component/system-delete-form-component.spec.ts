import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDeleteFormComponent } from './system-delete-form-component';

describe('SystemDeleteFormComponent', () => {
  let component: SystemDeleteFormComponent;
  let fixture: ComponentFixture<SystemDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDeleteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
