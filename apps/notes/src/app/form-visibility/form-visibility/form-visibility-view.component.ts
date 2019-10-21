import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RelatedControlService } from '../related-control.service';

@Component({
  selector: 'app-form-visibility',
  templateUrl: './form-visibility-view.component.html',
  styleUrls: ['./form-visibility-view.component.scss']
})
export class FormVisibilityViewComponent implements OnInit, OnDestroy {

  pageFormGroup: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder,
              private visibilityService: RelatedControlService) {
  }

  ngOnInit() {
    this.pageFormGroup = this.createForm();
    this.logging();
    // to kontrolka ma kontrole czy czyscic , pobiera sygnaly gdy rodzic zmieni wartosc
    this.subscribeToAllControlsDownToUp();
    // to rodzic ma kontrole ktore kontrolki wyczyscic
    // this.subscribeToAllControlsUpToDown();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      'a': this.fb.group({
        'aa': this.fb.group({
          'aaa': this.fb.control(''),
          'aab': this.fb.control(''),
          'aac': this.fb.control(''),
        }),
        'ab': this.fb.group({
          'aba': this.fb.control(''),
          'abb': this.fb.control(''),
          'abc': this.fb.control(''),
        }),
      }),
      'b': this.fb.group({
        'ba': this.fb.group({
          'baa': this.fb.control(''),
          'bab': this.fb.control(''),
          'bac': this.fb.control(''),
        }),
        'bb': this.fb.group({
          'bba': this.fb.control(''),
          'bbb': this.fb.control(''),
          'bbc': this.fb.control(''),
        }),
      }),
    });
  }

  private subscribeToAllControlsDownToUp() {
    // to kontrolka ma kontrole czy czyscic , pobiera sygnaly gdy rodzic zmieni wartosc
    this.visibilityService.register(this.pageFormGroup, this.destroy$);
}

  // logowanie
  private logging() {
    // logowanie
    this.pageFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log('pageFormGroup valueChanges: ', value);
    });

    this.subscribeToLogger('a');
    this.subscribeToLogger('a.aa');
    this.subscribeToLogger('a.aa.aaa');
    this.subscribeToLogger('a.aa.aab');
    this.subscribeToLogger('a.aa.aac');
    this.subscribeToLogger('a.ab');
    this.subscribeToLogger('a.ab.aba');
    this.subscribeToLogger('a.ab.abb');
    this.subscribeToLogger('a.ab.abc');

    this.subscribeToLogger('b');
    this.subscribeToLogger('b.ba');
    this.subscribeToLogger('b.ba.baa');
    this.subscribeToLogger('b.ba.bab');
    this.subscribeToLogger('b.ba.bac');
    this.subscribeToLogger('b.bb');
    this.subscribeToLogger('b.bb.bba');
    this.subscribeToLogger('b.bb.bbb');
    this.subscribeToLogger('b.bb.bbc');
  }

  private subscribeToLogger(path: string): void {
    const control = this.pageFormGroup.get(path);
    control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log(path + ' !!valueChanges: ', value);
    });
  }

  // koniec logowanie

  // up to down
  private subscribeToAllControlsUpToDown() {
    // to rodzic ma kontrole ktore kontrolki wyczyscic
    this.pageFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log('pageFormGroup valueChanges: ', value);
    });


    this.subscribeUpToDownRelated('a');
    this.subscribeUpToDownRelated('a.aa');
    this.subscribeUpToDownRelated('a.aa.aaa', this.resetControlIfChanges('a.aa.aab'));
    this.subscribeUpToDownRelated('a.aa.aab', this.resetControlIfChanges('a.aa.aac'));
    this.subscribeUpToDownRelated('a.aa.aac', this.resetControlIfChanges('a.ab.aba'));
    this.subscribeUpToDownRelated('a.ab');
    this.subscribeUpToDownRelated('a.ab.aba', this.resetControlIfChanges('a.ab.abb'));
    this.subscribeUpToDownRelated('a.ab.abb', this.resetControlIfChanges('a.ab.abc'));
    this.subscribeUpToDownRelated('a.ab.abc', this.resetControlIfChanges('b.ba.baa'));


    this.subscribeUpToDownRelated('b');
    this.subscribeUpToDownRelated('b.ba');
    this.subscribeUpToDownRelated('b.ba.baa', this.resetControlIfChanges('b.ba.bab'));
    this.subscribeUpToDownRelated('b.ba.bab', this.resetControlIfChanges('b.ba.bac'));
    this.subscribeUpToDownRelated('b.ba.bac', this.resetControlIfChanges('b.bb.bba'));
    this.subscribeUpToDownRelated('b.bb');
    this.subscribeUpToDownRelated('b.bb.bba', this.resetControlIfChanges('b.bb.bbb'));
    this.subscribeUpToDownRelated('b.bb.bbb', this.resetControlIfChanges('b.bb.bbc'));
    this.subscribeUpToDownRelated('b.bb.bbc');

    this.pageFormGroup.get('b.ba.baa').valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log('force b.ba.baa valueChanges!!!!: ', value);
    });

  }

  // up to down
  private subscribeUpToDownRelated(path: string, callback?: (control: AbstractControl) => void): void {
    const control = this.pageFormGroup.get(path);
    control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log(path + ' !!valueChanges: ', value);
      callback(control);
    });
  }

  // up to down
  private resetControlIfChanges(path: string): () => void {
    return () => {
      const _path = path;
      const control = this.pageFormGroup.get(_path);
      control.reset();
      console.log(path + 'reseted');
    };
  }
}
