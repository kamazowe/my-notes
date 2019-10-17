import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { RelatedControl } from './related-control';
import { VisibilityConditionService } from './VisibilityCondition.service';

@Injectable({providedIn: 'root'})
export class RelatedControlService {

  pageFormGroup: FormGroup;
  relatedControls: RelatedControl[] = [];
  subscription: Subscription;
  destroy$: Subject<void>;

  constructor(private visibilityConditionService: VisibilityConditionService) {

  }

  register(pageFormGroup: FormGroup, destroy$: Subject<void>) {
    this.pageFormGroup = pageFormGroup;
    this.destroy$ = destroy$;

    this.subscribeToDestroyAll();
    this.initialRelatedControl();
  }


  initialRelatedControl() {
    const a_aa_aab_related = new RelatedControl(
      this.pageFormGroup.get('a.aa.aab'),
      this.visibilityConditionService.visibility_a_aa_aab,
      [this.pageFormGroup.get('a.aa.aaa')],
      this.pageFormGroup);

    this.addRelatedControl(a_aa_aab_related);


    const a_aa_aac_related = new RelatedControl(
      this.pageFormGroup.get('a.aa.aac'),
      this.visibilityConditionService.visibility_a_aa_aac,
      [this.pageFormGroup.get('a.aa.aab')],
      this.pageFormGroup);

    this.addRelatedControl(a_aa_aac_related);

    const a_ab_aba_related = new RelatedControl(
      this.pageFormGroup.get('a.ab.aba'),
      this.visibilityConditionService.visibility_a_ab_aba,
      [this.pageFormGroup.get('a.aa.aac')],
      this.pageFormGroup);

    this.addRelatedControl(a_ab_aba_related);


    const a_ab_abb_related = new RelatedControl(
      this.pageFormGroup.get('a.ab.abb'),
      this.visibilityConditionService.visibility_a_ab_abb,
      [this.pageFormGroup.get('a.ab.aba')],
      this.pageFormGroup);

    this.addRelatedControl(a_ab_abb_related);

    const b_bb_bbb = new RelatedControl(
      this.pageFormGroup.get('b.bb.bbb'),
      this.visibilityConditionService.visibility_b_bb_bbb,
      [this.pageFormGroup.get('a.ab.aba')],
      this.pageFormGroup);

    this.addRelatedControl(b_bb_bbb);
  }

  private addRelatedControl(related: any): void {
    this.relatedControls.push(related);
  }

  private subscribeToDestroyAll() {
    this.subscription = this.destroy$.subscribe(_ => {
      this.relatedControls.forEach(relatedControl => {
        relatedControl.destroy();
      });
      this.relatedControls = [];

      this.subscription.unsubscribe();
    });
  }
}
