import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const NavbarUser = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="text-2xl max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/"><img
                  src="/ZenState.svg"
                  alt="ZenState"
                  className="h-12"
                /></a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/onboarding" className="=">
                  <UserButton afterSignOutUrl="/"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarUser;
