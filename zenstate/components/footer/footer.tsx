import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/ZenState.svg" 
            alt="ZenState"
            className="h-12" 
          />
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <a href="/" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
