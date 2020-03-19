import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cats">
              Cats
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/owners">
              Owners
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
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
