
import React from 'react';
import {Alert} from 'reactstrap';
import AlertContext from '../contexts/AlertContext';

const AlertPanel = (props) => {
    return (
        <AlertContext.Consumer>
            {({alert}) => {
                return (
                    <Alert color={alert.type}>
                        {alert.message}
                    </Alert>
                );
            }}
        </AlertContext.Consumer>
    )
}

export default AlertPanel;
