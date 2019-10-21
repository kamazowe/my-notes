import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { compareCourses } from './models/course';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { CoursesResolver } from './services/courses.resolver';
import { CourseComponent } from './course/course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CoursesDataService } from './services/courses-data.service';
import { CoursesEntityService } from './services/courses-entity.service';


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
