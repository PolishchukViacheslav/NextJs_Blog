import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { State } from '../interfaces';

export const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<State>(makeStore);
