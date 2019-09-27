import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFieldComponent } from './login-field/login-field.component';


const routes: Routes = [
  { path: 'notes', component: LoginFieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
