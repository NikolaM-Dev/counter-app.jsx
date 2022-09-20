import React from 'react';
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from './App';
  return <h1>Hello World</h1>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>,
);
