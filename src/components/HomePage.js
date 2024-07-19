import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur la plateforme de gestion</h1>
      <p>Connectez-vous pour accéder à votre espace personnalisé.</p>
      <Link to="/login" className="login-link">Se connecter</Link>
    </div>
  );
};

export default HomePage;
