import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseBundleComponent } from './new-release-bundle-component';

describe('NewReleaseBundleComponent', () => {
  let component: NewReleaseBundleComponent;
  let fixture: ComponentFixture<NewReleaseBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReleaseBundleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleaseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
