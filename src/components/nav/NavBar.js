import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  const handleLogout = () => {
    props.clearOwner();
   //props.history.push('/login');
  }
  return (
    <header>
      <h1 className="site-title">
        feline & co. 
        <br />
        <small>Because your cat's happiness matters.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li>
           
            <Link className="nav-link" to="/cats">
              Cats
            </Link>
            
          </li>
          <li>
            <Link className="nav-link" to="/vets">
              Vets
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/appointments">
              Appointments
            </Link>
          </li>
          {props.hasOwner
            ? <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>
            : <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
