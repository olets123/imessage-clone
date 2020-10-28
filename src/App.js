import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Imessage from './Imessage';
import Login from './Login';
import { auth } from './Firebase'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // user is logget out
        dispatch(logout())
      }
    })
  }, [])

  return (

    <div className="app">
      {/**If there is no user - > need to login with user */}
      {user ? <Imessage /> : <Login />}

    </div>

  );
}

export default App;
