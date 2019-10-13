import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Course } from 'src/app/courses/models/course';
import { createEntityCacheSelector } from '@ngrx/data';

// export const selectCoursesState =
//   createFeatureSelector<EntityState<Course>>('entityCache');

export const selectCoursesState = createEntityCacheSelector('Course');

export const selectAllCourses = createSelector(
  selectCoursesState,
  x => x);
//
// export const selectBeginnerCourses = createSelector(
//   selectAllCourses,
//   courses => courses.enti(course => course.category == 'BEGINNER'));
//
// export const selectAdvancedCourses = createSelector(
//   selectAllCourses,
//   courses => courses.filter(course => course.category == 'ADVANCED'));
//
// export const selectPromoTotal = createSelector(
//   selectAllCourses,
//   courses => courses.filter(course => course.promo).length);
//
// export const areCoursesLoaded = createSelector(
//   selectCoursesState,
//   state => state.allCoursesLoaded);

