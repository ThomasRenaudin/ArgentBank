// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Ajout de PersistGate
import store, { persistor } from './redux/Store'; // Import du store Redux


import Homepage from './page/Homepage';
import Signinpage from './page/Signinpage';
import Userpage from './page/Userpage';
import Errorpage from './page/Errorpage';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Utilisation de PersistGate pour persister le store Redux */}
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route exact path="/index.html" element={<Homepage />}/> 
            <Route path="/sign-in.html" element={<Signinpage />}/> 
            <Route path="/user.html" element={<Userpage />}/> 
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  root
);
