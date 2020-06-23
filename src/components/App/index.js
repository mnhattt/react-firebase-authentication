import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import { withAuthentication, AuthUserContext } from '../Firebase'

import Navigation from '../Navigation'
import * as ROUTES from '../../constants/routes';
import LandingPage from '../Landing';
import SignOut from '../SignOut';
import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

function App() {
  console.log('app')
  const user = useContext(AuthUserContext)

  return (
    <div className="App">
      <Router>
        <Navigation user={user} />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.Sign_OUT} component={SignOut} />
        {user !== null &&
          <>
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
export default withAuthentication(App);
