import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';


import Navigation from '../Navigation'
import * as ROUTES from '../../constants/routes';
import LandingPage from '../Landing';
import SignOutPage from '../SignOut';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import { useAuthenUser } from '../hooks'

function App() {

  const { authUser } = useAuthenUser()

  return (
    <div className="App">
      <Router>
        <Navigation authUser={authUser} />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        {authUser !== null &&
          <>
            <Route path={ROUTES.Sign_OUT} component={SignOutPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={LandingPage} />
            <Route path={ROUTES.HOME} component={LandingPage} />
            <Route path={ROUTES.ACCOUNT} component={LandingPage} />
            <Route path={ROUTES.ADMIN} component={LandingPage} />
          </>
        }
      </Router>
    </div>
  );
}
// export default App;
export default App;
