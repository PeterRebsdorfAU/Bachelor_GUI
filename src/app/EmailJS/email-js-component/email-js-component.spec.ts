import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailJSComponent } from './email-js-component';

describe('EmailJSComponent', () => {
  let component: EmailJSComponent;
  let fixture: ComponentFixture<EmailJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailJSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
