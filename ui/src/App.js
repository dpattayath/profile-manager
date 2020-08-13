import React, {useState} from 'react';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import AuthContext from './contexts/AuthContext';
import AlertContext from './contexts/AlertContext';
import AlertPanel from './components/AlertPanel';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [alert, setAlert] = useState({'type': '', 'message': ''});

  const onAuthChange = (value) => {
    setAuthenticated(value);
  }

  const onAlert = (value) => {
    setAlert(value);
    setTimeout(() => {
      setAlert({'type': '', 'message': ''});
    }, 2000);
  }

  const authContext = {
    authenticated: authenticated,
    onAuthChange: onAuthChange
  }

  const alertContext = {
    alert: alert,
    onAlert: onAlert
  }

  return (

    <AlertContext.Provider value={alertContext}>

      <AuthContext.Provider value={authContext}>

        <Navigation/>

        <AlertPanel type="success" message="this is an alert"/>

        <Profile />

      </AuthContext.Provider>

    </AlertContext.Provider>

  );

}

export default App;
