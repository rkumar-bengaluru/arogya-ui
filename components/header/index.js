import React from 'react';
import HeaderMenus from './menus';
import LogOutMenu from '../../pages/logout';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
  

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {<HeaderMenus/>}
        <div className="collapse navbar-collapse" id="navbarNav">
          
        </div>
        {<LogOutMenu/>}
      </div>
    </nav>
  );
}

export default Header;