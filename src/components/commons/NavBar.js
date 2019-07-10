import React from 'react';


function NavBar() {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto max-w-6xl overflow-y-scroll">
        <div className="flex items-center justify-center text-gray-400 h-full">
          <ul className="mx-4">
            <li className="flex items-center text-gray-500 h-12 text-sm font-hairline uppercase">
              <a href="localhost:8000" className="active mx-3 text-black">Home</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
              <a href="localhost:8000" className="mx-3">Family</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
