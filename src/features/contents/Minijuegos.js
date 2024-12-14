import React, { useState } from 'react';
import Juegos from '../../components/juegos/ComponenteJuegos';

const InterfazMostrarJuegos = ({ cambiarInterface, manejarIdClaseActual }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Juegos
          nombre_juego="Buscando palabras"
          img_juego="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97y8lkTRDnHD14VsgsyY7Vvoe5K97NmpY4Q&s"
          onClick={() => {
            cambiarInterface('B');
            manejarIdClaseActual(1); // Aquí la función se ejecuta al hacer clic
          }}
          boton_color="#28a745"
        ></Juegos>

        <Juegos
          nombre_juego="Juego 2"
          img_juego="https://i.pinimg.com/236x/6e/ab/90/6eab907a54dbd615709addca13beeb92.jpg"
          onClick={() => {
            cambiarInterface('B');
            manejarIdClaseActual(2); // Aquí la función se ejecuta al hacer clic
          }}
          boton_color="#dc3545"
        ></Juegos>

        <Juegos
          nombre_juego="Formando palabras"
          img_juego="https://cdn.shopify.com/s/files/1/1075/5414/files/nene_large.jpg?v=1501151084"
          onClick={() => {
            cambiarInterface('B');
            manejarIdClaseActual(3); // Aquí la función se ejecuta al hacer clic
          }}
          boton_color="#ffc107"
        ></Juegos>

        <Juegos
          nombre_juego="Juego 4"
          img_juego="https://i.pinimg.com/originals/14/4c/85/144c85e8e30f443886faf4c6ae7e4a8f.png"
          onClick={() => {
            cambiarInterface('B');
            manejarIdClaseActual(4); // Aquí la función se ejecuta al hacer clic
          }}
          boton_color="#007BFF"
        ></Juegos>
      </div>
    </div>
  );
};

const InterfazMostrarContenidoJuego = ({ cambiarInterface, id_claseActual }) => {
  let content = null;

  if (id_claseActual === 1) {
    content = (
      <div>
        <iframe
          src="https://itch.io/embed-upload/11931519?color=333333"
          frameBorder="0"
          allowFullScreen
          width="960"
          height="620"
          title="Minijuego"
        >
          <a href="https://elvis51223920.itch.io/findwods">Play findwods on itch.io</a>
        </iframe>
      </div>
    );
  }

  if (id_claseActual === 2) {
    content = (
      <div>
        <iframe
          src="https://itch.io/embed-upload/12247223?color=333333"
          frameBorder="0"
          allowFullScreen
          width="980"
          height="640"
          title="Minijuego 2"
        >
          <a href="https://abduzcan17.itch.io/yachay">Play Yachay on itch.io</a>
        </iframe>
      </div>
    );
  }

  if (id_claseActual === 3) {
    content = (
      <div>
        <iframe
          src="https://itch.io/embed-upload/12251348?color=333333"
          frameBorder="0"
          allowFullScreen
          width="960"
          height="640"
          title="Minijuego 3"
        >
          <a href="https://elvis51223920.itch.io/buscanumeros">Play buscaNumeros on itch.io</a>
        </iframe>
      </div>
    );
  }

  return (
    <div>
      {content} {/* Esto renderiza el contenido basado en id_claseActual */}

      {/* Este botón se muestra siempre al final */}
      <div>
        <button
          onClick={() => cambiarInterface('A')}
          style={{
            backgroundColor: '#007BFF', // Azul
            color: '#fff', // Texto blanco
            border: 'none', // Sin borde
            borderRadius: '5px', // Bordes redondeados
            padding: '10px 20px', // Espaciado interno
            fontSize: '16px', // Tamaño de fuente
            cursor: 'pointer', // Cursor de mano al pasar por encima
            transition: 'background-color 0.3s', // Efecto suave en el cambio de color
            marginRight: '10px', // Separación entre los botones
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Cambio de color al pasar el mouse
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')} // Vuelve al color original
        >
          Atrás
        </button>
      </div>
    </div>
  );
};

const Minijuegos = () => {
  const [currentInterface, setCurrentInterface] = useState('A');
  const [id_claseActual, setClaseActual] = useState(null);

  const manejarCambioInterface = (interfaceName) => {
    setCurrentInterface(interfaceName);
  };

  const manejarIdClaseActual = (claseId) => {
    setClaseActual(claseId);
  };

  return (
    <div>
      {/* Mostrar la interfaz actual */}
      {currentInterface === 'A' && (
        <InterfazMostrarJuegos
          cambiarInterface={manejarCambioInterface}
          manejarIdClaseActual={manejarIdClaseActual}
        />
      )}
      {currentInterface === 'B' && (
        <InterfazMostrarContenidoJuego
          cambiarInterface={manejarCambioInterface}
          id_claseActual={id_claseActual}
        />
      )}
    </div>
  );
};

export default Minijuegos;
