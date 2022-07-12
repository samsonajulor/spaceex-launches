import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, client } from './graphql';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);
