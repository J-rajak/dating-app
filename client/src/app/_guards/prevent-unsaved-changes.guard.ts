import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (Component) => {
  if(Component.editForm?.dirty) {
    return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
  }
  return true;
};
