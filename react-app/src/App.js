import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import User from "./components/User";
import BrewForm from './components/BrewForm/BrewForm'
import BrewView from './components/BrewView/BrewView'
import UserProf from './components/UserProf/userProf'
import RotationList from './components/RotationList'
import SearchBrews from './components/SearchBrews'
import Dashboard from './components/Dashboard'
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./services/auth";
import { setUser } from "./store/session"


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState(true);
  const [sessionUser, setSessionUser] = useState('')


  const dispatch = useDispatch()

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        dispatch(setUser(user));
        setAuthenticated(true);
        setSessionUser(user)
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setDisplay={setDisplay} setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      {loaded && (
      <Switch>
        <Route exact path="/" >
        {!authenticated ? 
            <Home authenticated={authenticated} setAuthenticated={setAuthenticated} display={display} />
            :
           <UserProf display={display} />
        }
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path='/search/brews'>
          <SearchBrews />
        </Route>
        <Route path='/users/:userId'>
          <User />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/rotations/:userId"  authenticated={authenticated}>
          <RotationList user={sessionUser}/>
        </ProtectedRoute>
        <ProtectedRoute path="/brews/add/new" exact={true} authenticated={authenticated}>
          <BrewForm />
        </ProtectedRoute>
        <Route path="/brews/:brewId" exact={true}>
          <BrewView />
        </Route>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
