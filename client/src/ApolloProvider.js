import React from 'react';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://portfolio-pmedina.herokuapp.com/profiles',
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)