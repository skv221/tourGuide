import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristHomeComponent } from './tourist-home.component';

describe('TouristHomeComponent', () => {
  let component: TouristHomeComponent;
  let fixture: ComponentFixture<TouristHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
