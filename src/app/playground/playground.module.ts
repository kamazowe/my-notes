import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlaygroundViewComponent } from 'src/app/playground/playground-view/playground-view.component';
import { PlaygroundRoutingModule } from 'src/app/playground/playground-routing.module';


@NgModule({
  declarations: [PlaygroundViewComponent],
  imports: [
    SharedModule,
    PlaygroundRoutingModule
  ],
})
export class PlaygroundModule {
}
