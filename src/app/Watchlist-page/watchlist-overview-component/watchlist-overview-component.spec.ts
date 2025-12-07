import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchlistOverviewComponent } from './watchlist-overview-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('WatchlistOverviewComponent', () => {
  let component: WatchlistOverviewComponent;
  let fixture: ComponentFixture<WatchlistOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WatchlistOverviewComponent,
        HttpClientTestingModule
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
