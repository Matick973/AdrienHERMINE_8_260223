import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Error-page.scss"

const ErrorPage = () => {

  return (
    <div className="error-page-container">

      <div className="error-404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>

      <div className="error-link">
        <NavLink to="/home">Retourner sur la page d’accueil</NavLink>
      </div>

    </div>
  );
}

export default ErrorPage