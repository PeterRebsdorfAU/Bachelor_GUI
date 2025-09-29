import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemProgressComponent } from './system-progress-component';

describe('SystemProgressComponent', () => {
  let component: SystemProgressComponent;
  let fixture: ComponentFixture<SystemProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
