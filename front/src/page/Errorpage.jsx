import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Errormessage from '../components/errormessage';

const Errorpage = () => {
  return (
    <div>
      <Navbar />
      <Errormessage />
      <Footer />
    </div>
  );
};

export default Errorpage;
