import { NgModule } from '@angular/core';
import { PlaygroundViewComponent } from './playground-view/playground-view.component';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundRoutingModule } from './playground-routing.module';


@NgModule({
  declarations: [PlaygroundViewComponent],
  imports: [
    SharedModule,
    PlaygroundRoutingModule
  ],
})
export class PlaygroundModule {
}
