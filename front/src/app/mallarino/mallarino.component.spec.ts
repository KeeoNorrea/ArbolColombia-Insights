import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallarinoComponent } from './mallarino.component';

describe('MallarinoComponent', () => {
  let component: MallarinoComponent;
  let fixture: ComponentFixture<MallarinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MallarinoComponent]
    });
    fixture = TestBed.createComponent(MallarinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
