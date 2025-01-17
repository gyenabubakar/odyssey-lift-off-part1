import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const gqlClient = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={gqlClient}>
        <React.StrictMode>
            <GlobalStyles/>
            <Pages/>
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
);
