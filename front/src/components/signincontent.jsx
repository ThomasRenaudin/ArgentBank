import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/main.css'; 
// Ajoutez cette importation au début de votre fichier
// import { setConnectedUser } from '../redux/Useraction';


const fetchUserProfile = async (authToken) => {
  try {
    const profileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (profileResponse.status === 200) {
      // Récupération réussie du profil de l'utilisateur
      console.log('User ID:', profileResponse.data.body);
      console.log('First name:', profileResponse.data.body.firstName);
      console.log('Mail', profileResponse.data.body.email);
      return profileResponse.data.body;
    } else {
      // Gérer les erreurs éventuelles lors de la récupération du profil
      console.error('Erreur lors de la récupération du profil de l\'utilisateur');
      return null;
    }
  } catch (error) {
    // Gérer les erreurs éventuelles liées à la requête
    console.error('Erreur lors de la récupération du profil de l\'utilisateur:', error);
    return null;
  }
};


function Signincontent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Envoi de la requête POST vers la base de données
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });

      console.log(response.data);
      // Réponse 200 - Redirection vers user.html et mise à jour de l'état connecté
      if (response.status === 200) {
        // Utilisation de useNavigate pour la redirection
        navigate('/user.html');
        const authToken = response.data.body.token;
        console.log(authToken);
          // Appel de la fonction pour récupérer le profil de l'utilisateur
      const userData = await fetchUserProfile(authToken);

  
        // Dispatch de l'action pour mettre à jour l'adresse e-mail dans le Redux store
        dispatch({
          type: 'SET_CONNECTED_USER',
          payload: [userData.firstName, userData.email],
        });
        
        
      } else {
        // Autre code de réponse inattendu
        handleUnexpectedError();
      }
    } catch (error) {
      if (error.response) {
        // La requête a été faite et le serveur a répondu avec un code d'erreur
        if (error.response.status === 400) {
          // Réponse 400 - Nom d'utilisateur ou mot de passe incorrect
          setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect');
          clearFormFields();
        } else {
          // Autre code de réponse d'erreur
          handleUnexpectedError();
        }
      } else {
        // Une erreur s'est produite lors de la requête (pas de réponse du serveur)
        handleUnexpectedError();
      }
    }
  };

  const handleUnexpectedError = () => {
    setErrorMessage('Nous avons un souci interne, merci de réessayer ultérieurement');
    clearFormFields();
  };

  const clearFormFields = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signincontent;

