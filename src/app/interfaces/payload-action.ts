import {Action as NgrxAction} from '@ngrx/store';

export interface PayloadAction extends NgrxAction {
  payload?: any;
}
