import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelloComponent } from './bello.component';

describe('BelloComponent', () => {
  let component: BelloComponent;
  let fixture: ComponentFixture<BelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelloComponent]
    });
    fixture = TestBed.createComponent(BelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
