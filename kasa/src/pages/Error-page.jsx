import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Error-page.scss"

const ErrorPage = () => {

  return (
    <div className="error-page-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      
        <NavLink to="/home">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}

export default ErrorPage