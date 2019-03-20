import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cards, boards } from './data';
// import * as Actions from './actions';
import rootReducer from './reducers';
import './index.css';
import App from './App';

const store = createStore(rootReducer, { cards, boards });

// ======== Tests ========
// console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(Actions.addBoard('My New Board'));
// store.dispatch(Actions.addCard('My new card', 2));
// store.dispatch(Actions.transferCard('0', 2));
// store.dispatch(Actions.removeCard('2'));
// store.dispatch(Actions.removeBoard(3));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
