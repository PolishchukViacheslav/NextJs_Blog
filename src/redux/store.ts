import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { State } from '../interfaces';

export const makeStore: MakeStore<State> = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<State>(makeStore);
