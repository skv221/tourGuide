import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGuideComponent } from './book-guide.component';

describe('BookGuideComponent', () => {
  let component: BookGuideComponent;
  let fixture: ComponentFixture<BookGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
