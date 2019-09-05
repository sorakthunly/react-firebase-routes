import { AnyAction } from 'redux';
import { ThunkAction as ReduxThunkAction, ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';

import { AppState } from '../../store';

export type PromiseThunkAction<T = void> = ReduxThunkAction<Promise<T>, AppState, {}, AnyAction>;

export type ThunkAction<T = void> = ReduxThunkAction<T, AppState, {}, AnyAction>;

export type ThunkDispatch = ReduxThunkDispatch<AppState, {}, AnyAction>;
