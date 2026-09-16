import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full py-6 px-8 bg-[#FBFBFA] border-b border-neutral-200 flex justify-center items-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="tracking-[0.25em] text-sm uppercase font-medium text-neutral-900">
          Weeknight Dinners
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
      </div>
    </header>
  );
};