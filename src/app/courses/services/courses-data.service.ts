import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Course } from 'src/app/courses/models/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Course', http, httpUrlGenerator);
  }


  getAll(): Observable<Course[]> {
    return this.http.get<{ payload: Course[] }>('api/courses').pipe(
      map(res => res['payload'])
    );
  }
}
