import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative bg-green-900 py-24 text-center">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-orange-400 text-lg tracking-wide uppercase font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;