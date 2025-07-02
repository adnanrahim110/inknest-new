import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Create the script element
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = '';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    // Insert the script into the DOM
    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);

    // Optionally, you can define Tawk_API and Tawk_LoadStart here if needed
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
  }, []);

  return null; // This component doesn't render any visible elements
};

export default TawkTo;
