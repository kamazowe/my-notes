import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/core/components/login/login.component';
import { NotFoundComponent } from 'src/app/core/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule'
  },
  {
    path: 'playground',
    loadChildren: './playground/playground.module#PlaygroundModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
