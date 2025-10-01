import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemInputComponent } from './system-input-component';

describe('SystemInputComponent', () => {
  let component: SystemInputComponent;
  let fixture: ComponentFixture<SystemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
