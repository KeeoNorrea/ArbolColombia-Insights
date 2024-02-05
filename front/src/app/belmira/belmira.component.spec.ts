import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelmiraComponent } from './belmira.component';

describe('BelmiraComponent', () => {
  let component: BelmiraComponent;
  let fixture: ComponentFixture<BelmiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelmiraComponent]
    });
    fixture = TestBed.createComponent(BelmiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
