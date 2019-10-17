import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-playground',
  templateUrl: './playground-view.component.html',
  styleUrls: ['./playground-view.component.scss']
})
export class PlaygroundViewComponent implements OnInit, OnDestroy {

  pageFormGroup: FormGroup;
  private destroy$ = new Subject();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.pageFormGroup = this.createForm();
    this.subscribeToAllControls();
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

  private subscribeToAllControls() {

    this.pageFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log('pageFormGroup valueChanges: ', value);
    });

    this.subscribeToLogger('a');
    this.subscribeToLogger('a.aa');
    this.subscribeToLogger('a.aa.aaa', this.resetControlIfChanges('a.aa.aab'));
    this.subscribeToLogger('a.aa.aab', this.resetControlIfChanges('a.aa.aac'));
    this.subscribeToLogger('a.aa.aac', this.resetControlIfChanges('a.ab.aba'));
    this.subscribeToLogger('a.ab');
    this.subscribeToLogger('a.ab.aba', this.resetControlIfChanges('a.ab.abb'));
    this.subscribeToLogger('a.ab.abb', this.resetControlIfChanges('a.ab.abc'));
    this.subscribeToLogger('a.ab.abc', this.resetControlIfChanges('b.ba.baa'));


    this.subscribeToLogger('b');
    this.subscribeToLogger('b.ba');
    this.subscribeToLogger('b.ba.baa', this.resetControlIfChanges('b.ba.bab'));
    this.subscribeToLogger('b.ba.bab', this.resetControlIfChanges('b.ba.bac'));
    this.subscribeToLogger('b.ba.bac', this.resetControlIfChanges('b.bb.bba'));
    this.subscribeToLogger('b.bb');
    this.subscribeToLogger('b.bb.bba', this.resetControlIfChanges('b.bb.bbb'));
    this.subscribeToLogger('b.bb.bbb', this.resetControlIfChanges('b.bb.bbc'));
    this.subscribeToLogger('b.bb.bbc');
  }


  private subscribeToLogger(path: string, callback?: any): void {
    const control = this.pageFormGroup.get(path);
    control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log(path + ' valueChanges: ', value);
      callback();
    });
  }

  private resetControlIfChanges(path: string) {
    return () => {
      const control = this.pageFormGroup.get(path);
      control.reset();
    };
  }


}
