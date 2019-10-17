import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Course } from '../models/course';
import { AppState } from '../../reducers';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  @Input() courses: Course[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.courses));

  }


  update() {

    const updatedCourseId = 4;
    const updatedDescription = 'updated element title';


    let course = this.courses.find((course: Course) => course.id === updatedCourseId);

    course = {
      ...course,
      description: updatedDescription
    };

    const updatedCourse: Update<Course> = {
      id: updatedCourseId,
      changes: course
    };
    // fixme
    // this.store.dispatch(courseUpdated({update: updatedCourse}));
  }


}
