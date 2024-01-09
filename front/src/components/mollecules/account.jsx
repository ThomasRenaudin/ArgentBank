import React, { useState } from 'react';
//import "../css/footer.css";
import Depense from './depense';

function Account() {
  const [message, setMessage] = useState('');
  const [isCross, setIsCross] = useState(false);

  const handleViewTransactions = () => {
    if (!isCross) {
      setMessage("Vous êtes pauvre lol");
    } else {
      setMessage('');
    }
    setIsCross(!isCross);
  };

  return (
    <section className="accountcontainer">
      <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={handleViewTransactions}>
            {isCross ? '✕' : 'View transactions'}
          </button>
        </div>
      </div>
    
      <div >
        {isCross && <Depense />}
      </div>
      
    </section>
  );
}

export default Account;
