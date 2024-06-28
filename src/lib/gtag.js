// src/lib/gtag.js
export const GA_TRACKING_ID = 'G-VRQQCKCK62';

export const initGA = () => {
  // Initialize gtag.js
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  // Set up configuration
  gtag('config', GA_TRACKING_ID);
};

export const pageview = (url) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
