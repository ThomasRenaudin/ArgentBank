import React, { useState } from 'react';


function Depense() {
  const [isChevronClicked, setIsChevronClicked] = useState(false);

  const handleChevronClick = () => {
    setIsChevronClicked(!isChevronClicked);
  };

  return (
    <section className={`Depense account-details ${isChevronClicked ? 'chevron-clicked' : ''}`}>
      <div className="entete">
        <div className="date">27/02/2023</div>
        <div className="description">Golden sun bakery</div>
        <div className="ammount">250€</div>
        <div className="balance">1924€</div>
        <i
          className={`fa ${isChevronClicked ? 'fa-chevron-up' : 'fa-chevron-down'}`}
          onClick={handleChevronClick}
        ></i>
      </div>
      {isChevronClicked && (
        <div className="Depense-message">
          <div className="DepenseType">
            <div class="DepenseType__element">Transaction type</div>
            <div class="DepenseType__element">Category</div>
            <div class="DepenseType__element">Note</div>
          </div>
          <div className="DepenseValue">
            <div class="DepenseType__element">Electronic</div>
            <div class="DepenseType__element">Food <i class="fa fa-pencil"></i></div>
            <div class="DepenseType__element">LoremIpsum <i class="fa fa-pencil"></i></div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Depense;
