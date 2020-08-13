import React from 'react';

/**
context to handle alert state across the app
 */
const AlertContext = React.createContext({type: '', message: ''});

export default AlertContext;
