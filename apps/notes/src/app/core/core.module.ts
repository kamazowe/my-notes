import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';


const COMPONENTS = [
  LoginComponent,
  HeaderComponent,
  LoaderComponent,
  NotFoundComponent,
  FooterComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
  ],
  exports: [...COMPONENTS]
})
export class CoreModule {
}
