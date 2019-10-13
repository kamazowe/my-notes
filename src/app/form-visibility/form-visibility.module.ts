import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormVisibilityViewComponent } from 'src/app/form-visibility/form-visibility/form-visibility-view.component';
import { RouterModule } from '@angular/router';


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
