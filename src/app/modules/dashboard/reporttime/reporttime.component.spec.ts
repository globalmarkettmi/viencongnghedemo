import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttimeComponent } from './reporttime.component';

describe('ReporttimeComponent', () => {
  let component: ReporttimeComponent;
  let fixture: ComponentFixture<ReporttimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporttimeComponent]
    });
    fixture = TestBed.createComponent(ReporttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
