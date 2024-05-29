import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleCaseComponent } from './trouble-case.component';

describe('TroubleCaseComponent', () => {
  let component: TroubleCaseComponent;
  let fixture: ComponentFixture<TroubleCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TroubleCaseComponent]
    });
    fixture = TestBed.createComponent(TroubleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
