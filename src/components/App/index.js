import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';


import Navigation from '../Navigation'
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import LandingPage from '../Landing';
import SignOutPage from '../SignOut';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
// import withAuthz from '../util/withAuthz'

// const AuthzRoute = withAuthz(Route)

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.Sign_OUT} component={SignOutPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
    </div >
  );
}


// export default App;
export default App;
