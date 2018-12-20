import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import {fetchEvent} from "./actions/events_actions";


document.addEventListener('DOMContentLoaded', () => {


  // window.login = login
  // window.logout = logout
  // window.signup = signup
  // window.getState = store.getState;

  // TESTING END
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  // window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchEvent = fetchEvent;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
