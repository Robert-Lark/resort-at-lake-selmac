import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react'
import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'https://mis83738.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

