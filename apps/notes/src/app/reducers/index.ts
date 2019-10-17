import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

// custom metareducer
export const logger = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('action before :', action.type);
    console.log('state before :', state);
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

