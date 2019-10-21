import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormVisibilityViewComponent } from './form-visibility/form-visibility-view.component';
import { SharedModule } from '../shared/shared.module';


const routes = [
  {
    path: '',
    component: FormVisibilityViewComponent
  },
];

@NgModule({
  declarations: [FormVisibilityViewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class FormVisibilityModule {
}
