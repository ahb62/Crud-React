import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloProvider }from 'react-apollo';
import {ApolloClient, InMemoryCache} from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://api.8base.com/ckslepq0q02dz09l82k1f6wh6',
    cache: new InMemoryCache(),
});
const uriAuth0 = `http://localhost:3000/tasks`;
const root = document.getElementById('root');
ReactDOM.render(
<ApolloProvider client={client}>
        <Auth0Provider domain="hello-friend.eu.auth0.com" clientId="npfrvfdh2cYf8iEU4WTTGuWx4G9PXmAs" redirectUri={uriAuth0}>
                <>
                    <App />
                </>
        </Auth0Provider>
            </ApolloProvider>
    ,root);