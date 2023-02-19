import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar =() => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="navbar">
      <h3> Apple Store  </h3>
      <div className="links">
        <Link to="/"> Shop </Link>

        <Link to="/contact"> Contact </Link>

        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <li>{isAuthenticated && <p>{user.name}</p>}</li>
      {isAuthenticated ? (
        <li>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>;
        </li>
      )}
    </div>
  );
}


