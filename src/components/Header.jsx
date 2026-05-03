import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="sticky top-0 m-3 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-xl animate-slideDownColor">
      <div className="container  px-6 py-6 flex items-center justify-between ">
        
        <h1 className="text-3xl font-extrabold text-white"> RECIPE FINDER </h1>

        <nav className="space-x-6 text-lg">

          <Link to="/favorites" className="hover:text-yellow-300 transition duration-300 text-xl text-white fond-semibold">
            FAVORITES
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;