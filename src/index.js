// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GA_TRACKING_ID, pageview } from './lib/gtag'; // Import GA_TRACKING_ID and pageview function
import createGlobalStyle from './global'; // Assuming this is for global styles

const container = document.getElementById('root');
const root = createRoot(container);
createGlobalStyle();

// Initialize Google Analytics
if (GA_TRACKING_ID) {
  // Define the gtag() function globally
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;

  script.onload = () => {
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);

    // Track initial pageview
    pageview(window.location.pathname);
  };

  document.head.appendChild(script);
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
