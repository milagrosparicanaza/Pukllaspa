import React from 'react';

function Soporte() {
  return (
    <div>
      <h1>Soporte</h1>
      <p>Si tienes alguna duda o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte.</p>

      <h2>¿Cómo podemos ayudarte?</h2>
      <ul>
        <li>
          <a href="https://example.com/faq" target="_blank" rel="noopener noreferrer">
            FAQ - Preguntas frecuentes
          </a>
        </li>
        <li>
          <a href="https://example.com/contacto" target="_blank" rel="noopener noreferrer">
            Formulario de contacto
          </a>
        </li>
      </ul>

      <h3>Enlaces útiles</h3>
      <p>Accede a los siguientes recursos para encontrar soluciones a tus problemas:</p>
      <ul>
        <li>
          <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
            Documentación oficial de React
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank" rel="noopener noreferrer">
            Stack Overflow: Preguntas y respuestas sobre React
          </a>
        </li>
      </ul>

      <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google_Gmail_logo_2020.svg" alt="Gmail Soporte" />
    </div>
  );
}

export default Soporte;
