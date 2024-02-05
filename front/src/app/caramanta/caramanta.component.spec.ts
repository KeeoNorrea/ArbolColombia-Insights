import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaramantaComponent } from './caramanta.component';

describe('CaramantaComponent', () => {
  let component: CaramantaComponent;
  let fixture: ComponentFixture<CaramantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaramantaComponent]
    });
    fixture = TestBed.createComponent(CaramantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
