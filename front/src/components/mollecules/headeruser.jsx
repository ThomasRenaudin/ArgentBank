// Headeruser.jsx
import React from 'react';
import { useSelector } from 'react-redux';

function Headeruser() {
  // Utilisez useSelector pour accéder à l'état de Redux
  const connectedUserEmail = useSelector(state => state.user.connectedUser);

  return (
    <div className="header">
        {/* Utilisez l'adresse e-mail récupérée du Redux state */}
        <h1>Welcome back<br />{connectedUserEmail || 'Guest'}!</h1>
        <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default Headeruser;

  