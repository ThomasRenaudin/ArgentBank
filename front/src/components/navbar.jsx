import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Banklogo from '../img/argentBankLogo.png';

function Navbar() {
  const connectedUserId = useSelector(state => state.user.connectedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch de l'action pour déconnecter l'utilisateur
    dispatch({
      type: 'SET_CONNECTED_USER',
      payload: null,
    });

    // Redirection vers la page d'accueil
    navigate('/index.html');
  };

  return (
    <nav className="main-nav">
      <Link to="/index.html" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Banklogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="navbarFunctions">
        {connectedUserId ? (
          <>
            <span className ="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Hello {connectedUserId}
            </span>
            <Link to="/user.html" className="main-nav-item">
              <i className="fa fa-list"></i>
             My accounts
            </Link>
            <button onClick={handleLogout} className="main-nav-item signoutBtn">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/sign-in.html" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
