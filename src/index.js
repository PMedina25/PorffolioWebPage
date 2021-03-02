import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import ApolloProvider from './ApolloProvider';

ReactDOM.render(
  <React.StrictMode>
    {ApolloProvider}
  </React.StrictMode>,
  document.getElementById('root')
);
