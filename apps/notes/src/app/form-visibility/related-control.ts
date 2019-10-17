import { AbstractControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

export class RelatedControl {

  private subscription: Subscription;

  constructor(public control: AbstractControl,
              public showControlCondition: (fg?: FormGroup) => boolean, public  upperControls: AbstractControl[],
              public relativeFormGroup: FormGroup) {
    this.init();
  }


  init() {
    const emitter$ = this.createEmitter();
    this.subscription = emitter$
      .subscribe((valueChangesArray: any[]) => {
        const showControlConditionResult = this.showControlCondition(this.relativeFormGroup);
        if (showControlConditionResult && this.control.disabled) {
          this.control.reset(null, {emitEvent: false});
          this.control.enable();
        } else if (!showControlConditionResult && this.control.enabled) {
          this.control.reset(null, {emitEvent: false});
          this.control.disable();
        }
      });

  }

  destroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createEmitter(): Observable<any> {
    const controlsValueChanges = this.upperControls.map(upperControl => upperControl.valueChanges.pipe(startWith(upperControl.value)));
    return combineLatest(controlsValueChanges);
  }
}
