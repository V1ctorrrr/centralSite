import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3dComponent } from './portfolio3d.component';

describe('Portfolio3dComponent', () => {
  let component: Portfolio3dComponent;
  let fixture: ComponentFixture<Portfolio3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Portfolio3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
