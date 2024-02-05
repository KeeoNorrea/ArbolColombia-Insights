import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantafeComponent } from './santafe.component';

describe('SantafeComponent', () => {
  let component: SantafeComponent;
  let fixture: ComponentFixture<SantafeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantafeComponent]
    });
    fixture = TestBed.createComponent(SantafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
