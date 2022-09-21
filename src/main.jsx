import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp subTitle={123} title="Hello 👋, I'm Goku" />
  </React.StrictMode>,
);
