import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
import EventShowContainer from './events/event_show_container';
import EventFormContainer from './events/event_form_container';
import FooterContainer from './footer/footer_container';

// <ProtectedRoute exact path="/events/new" component={SignUpFormContainer}/>
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>
    <Modal/>
    <header className="header-min-width">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>eventbook</Link>
      <NavBarContainer />
    </header>

    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <ProtectedRoute exact path="/events/new" component={EventFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route path="/events/:eventId" component={EventShowContainer} />
      <Redirect to="/"/>
    </Switch>
    <FooterContainer/>
  </div>
);

export default App;
