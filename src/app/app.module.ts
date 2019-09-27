import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { LoginFieldComponent } from './login-field/login-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFieldComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
