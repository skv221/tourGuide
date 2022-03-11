import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristSignupComponent } from './tourist-signup.component';

describe('TouristSignupComponent', () => {
  let component: TouristSignupComponent;
  let fixture: ComponentFixture<TouristSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
