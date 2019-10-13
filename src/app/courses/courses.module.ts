import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { CourseComponent } from './course/course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { compareCourses } from 'src/app/courses/models/course';
import { CoursesEntityService } from 'src/app/courses/services/courses-entity.service';
import { CoursesDataService } from 'src/app/courses/services/courses-data.service';
import { CoursesResolver } from 'src/app/courses/services/courses.resolver';


const entityMetaData: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
};

const coursesRoutes: Route[] = [
  {
    path: '',
    component: CoursesViewComponent,
    resolve: {
      courses: CoursesResolver
    }
  },
];

@NgModule({
  declarations: [
    CoursesViewComponent,
    CourseComponent,
    EditCourseComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(coursesRoutes),
  ],
  providers: [
    CoursesEntityService,
    CoursesDataService,
    CoursesResolver,
  ]
})
export class CoursesModule {
  constructor(private eds: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private coursesDataService: CoursesDataService) {
    this.eds.registerMetadataMap(entityMetaData);
    this.entityDataService.registerService('Course', coursesDataService);
  }
}
