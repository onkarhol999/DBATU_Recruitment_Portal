// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-blue-400 text-white p-4 mt-8">
      <div className="flex justify-between">
        <div className="footer-links">
          <a className="mr-4" href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          {/* Add more links as needed */}
        </div>
        <p>&copy; {new Date().getFullYear()} DBATU. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
