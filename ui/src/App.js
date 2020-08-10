import React, {useState} from 'react';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import AuthContext from './contexts/AuthContext';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);

  const onAuthChange = (value) => {
    setAuthenticated(value);
  }

  const value = {
    authenticated: authenticated,
    onAuthChange: onAuthChange
  }

  return (

    <AuthContext.Provider value={value}>

      <Navigation/>

      <Profile />

    </AuthContext.Provider>

  );

}

export default App;
