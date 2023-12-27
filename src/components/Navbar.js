import React from 'react';
import logo from '../logo.svg';

function Navbar() {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-[#252F3D] p-4">
            <div className="flex items-center flex-shrink-0 text-white lg:mx-6">
                <img src={logo} className="w-[148px] lg:w-[294px]" alt="logo" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
