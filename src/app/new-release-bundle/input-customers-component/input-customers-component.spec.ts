import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomersComponent } from './input-customers-component';

describe('InputCustomersComponent', () => {
  let component: InputCustomersComponent;
  let fixture: ComponentFixture<InputCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
