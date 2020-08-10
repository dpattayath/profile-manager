import React from 'react';

/**
context to handle auth state across the app
 */
const AuthContext = React.createContext({authenticated: false});

export default AuthContext;
