import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { CoursesEntityService } from './courses-entity.service';


@Injectable()
export class CoursesResolver implements Resolve<any> {

  constructor(private coursesEntityService: CoursesEntityService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {

    return this.coursesEntityService.loading$
      .pipe(
        tap(coursesLoaded => {
          if (!coursesLoaded) {
            this.coursesEntityService.getAll();
          }
        }),
        filter(coursesLoaded => !!coursesLoaded),
        first(),
      );
  }

}
