import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCanvasComponent } from './star-canvas.component';

describe('StarCanvasComponent', () => {
  let component: StarCanvasComponent;
  let fixture: ComponentFixture<StarCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
