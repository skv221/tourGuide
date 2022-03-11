import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristLoginComponent } from './tourist-login.component';

describe('TouristLoginComponent', () => {
  let component: TouristLoginComponent;
  let fixture: ComponentFixture<TouristLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
