import { NgModule } from '@angular/core';
import { PlaygroundComponent } from './playground/playground.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    SharedModule
  ],
})
export class PlaygroundModule {
}
