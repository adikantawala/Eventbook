import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import {login, signup, logout} from "./actions/session_actions"


document.addEventListener('DOMContentLoaded', () => {


  // window.login = login
  // window.logout = logout
  // window.signup = signup
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // TESTING END
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
