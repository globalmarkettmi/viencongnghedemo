import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraDetailComponent } from './camera-detail.component';

describe('CameraDetailComponent', () => {
  let component: CameraDetailComponent;
  let fixture: ComponentFixture<CameraDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CameraDetailComponent]
    });
    fixture = TestBed.createComponent(CameraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
