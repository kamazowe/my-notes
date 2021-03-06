import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewComponent } from 'src/client/app/courses/courses-view/courses-view.component';

describe('CoursesViewComponent', () => {
  let component: CoursesViewComponent;
  let fixture: ComponentFixture<CoursesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
