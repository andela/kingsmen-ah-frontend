import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


function NavBar() {
  return (
    <div className="bg-blue-700">
      <div className="container mx-auto max-w-6xl overflow-y-scroll">
        <div className="flex items-center justify-center text-white h-full">
          <ul className="mx-4">
            <li className="flex items-center text-gray-400 h-12 text-sm uppercase capitalize">
              <Link to="/tags" className="active mx-3 text-white">Home</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
              <Link to="/tags" className="mx-3">Family</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
