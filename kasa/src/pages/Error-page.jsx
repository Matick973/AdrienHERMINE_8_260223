import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    console.error(error);

  return (
    <div id="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      
        <NavLink to="/home">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}

export default ErrorPage