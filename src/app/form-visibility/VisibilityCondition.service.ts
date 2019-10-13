import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class VisibilityConditionService {


  visibility_a_aa_aab(pageFormGroup: FormGroup): boolean {
    const control = pageFormGroup.get('a.aa.aaa');
    return control.enabled && (control.value !== '' && control.value !== null);
  }

  visibility_a_aa_aac(pageFormGroup: FormGroup): boolean {
    const control = pageFormGroup.get('a.aa.aab');
    return control.enabled && (control.value !== '' && control.value !== null);
  }

  visibility_a_ab_aba(pageFormGroup: FormGroup): boolean {
    const control = pageFormGroup.get('a.aa.aac');
    return control.enabled && (control.value !== '' && control.value !== null);
  }

  visibility_a_ab_abb(pageFormGroup: FormGroup): boolean {
    const control = pageFormGroup.get('a.ab.aba');
    return control.enabled && (control.value !== '' && control.value !== null);
  }

  visibility_b_bb_bbb(pageFormGroup: FormGroup): boolean {
    const control = pageFormGroup.get('a.ab.aba');
    return control.enabled && (control.value !== '' && control.value !== null);
  }
}
