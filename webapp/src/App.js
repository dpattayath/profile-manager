import React from 'react';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';

const App = () => {

  const logout = () => {
    console.log("Logged out");
  }

  const profile = {
    username : 'dileep'
  }

  return (

    <React.Fragment>

      <Navigation
        isLoggedIn={true}
        logout={logout}
        profile={profile}/>

      <Profile />

    </React.Fragment>

  );

}

export default App;
