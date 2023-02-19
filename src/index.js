import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider
    domain="dev-88ifejxctz6zptc5.us.auth0.com"
    clientId="kANxVGCYFyy6u22hTgXYaygpEDXs9kay"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  
);


