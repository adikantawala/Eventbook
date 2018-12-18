import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
import EventShowContainer from './events/event_show_container';
// <ProtectedRoute exact path="/events/new" component={SignUpFormContainer}/>

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>
    <header>
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>eventbook</Link>
      <NavBarContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/events/:eventId" component={EventShowContainer} />
    </Switch>
  </div>
);

export default App;
