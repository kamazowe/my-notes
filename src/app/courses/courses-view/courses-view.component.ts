import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/courses/models/course';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent implements OnInit {

  promoTotal$: Observable<number>;
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  all$: Observable<Course[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.reload();
  }


  reload() {
    //
    // this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));
    // this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));
    // this.promoTotal$ = this.store.pipe(select(selectPromoTotal));
    // this.all$ = this.store.pipe(select(selectAllCourses));


    this.beginnerCourses$ = of(null);
    this.advancedCourses$ = of(null);
    this.promoTotal$ = of(null);
    this.all$ = of(null);

  }

}
