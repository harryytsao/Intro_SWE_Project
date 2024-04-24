import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="text-2xl max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* ZenState Logo */}
                <a href="/"><img
                  src="/ZenState.svg"
                  alt="ZenState"
                  className="h-12"
                /></a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {/* Login Button */}
                <a href="/onboarding" className="border border-slate-300 text-slate-300 px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Login</a> 
              </div>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
