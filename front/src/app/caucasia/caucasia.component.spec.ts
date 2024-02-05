import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaucasiaComponent } from './caucasia.component';

describe('CaucasiaComponent', () => {
  let component: CaucasiaComponent;
  let fixture: ComponentFixture<CaucasiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaucasiaComponent]
    });
    fixture = TestBed.createComponent(CaucasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
