import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";


export const Navbar =() => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="navbar">
      <h3 className="h3"> Apple Store  </h3>
      <div className="links">
        <Link to="/"> Shop </Link>

        <Link to="/contact"> Contact </Link>

        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      {isAuthenticated && <p className="user">{user.name}</p>}
      {isAuthenticated ? (
        
          <button className="btn btn-dark"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        
      ) : (
        
          <button className="btn btn-light" onClick={() => loginWithRedirect()}>Log In</button>
        
      )}
    </div>
  );
}


