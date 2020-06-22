import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import { firebaseAuth, authUserContext } from '../Firebase'

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
  const [user, setUser] = useState(null)
  const useContext = React.createContext()

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(authUser => {
      setUser(authUser)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.Sign_OUT} component={SignOut} />
        {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      </Router>
    </div>
  );
}

export default App;
