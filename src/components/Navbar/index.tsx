import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.less';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar_controlls">
      <Link to="/sign_in">Sign In </Link>
      <Link to="/sign_up">Sign Up </Link>
    </div>
  </nav>
);

export default Navbar;
