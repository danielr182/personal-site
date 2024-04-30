import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBannerComponent } from './social-media-banner.component';

describe('VerticalBannerComponent', () => {
  let component: VerticalBannerComponent;
  let fixture: ComponentFixture<VerticalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
