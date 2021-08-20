import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
const root = document.getElementById('root');
ReactDOM.render(
    <>
    <Auth0Provider domain="hello-friend.eu.auth0.com"     clientId="r96e1RwoDP9YweCu5xGGoIG4t4vzGS4S"
    redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
    </>,
    root);