import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


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
