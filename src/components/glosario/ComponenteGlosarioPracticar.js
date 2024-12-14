import React, { useState, useEffect, useCallback } from "react";
import './ComponenteGlosarioPracticar.css'; // Asegúrate de importar el archivo CSS

// Función para desordenar el arreglo (barajar aleatoriamente)
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function ComponenteGlosarioPracticar({ glosario }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Para llevar el seguimiento de las preguntas
  const [message, setMessage] = useState(""); // Para mostrar el mensaje de felicitaciones
  const [answers, setAnswers] = useState([]); // Para almacenar las opciones de respuesta

  // Generar las opciones de respuesta para la pregunta actual
  const generateOptions = useCallback((currentQuestion) => {
    const randomAnswers = shuffleArray([
      ...glosario.filter((item) => item.palabra_quechua !== currentQuestion.palabra_quechua)
        .slice(0, 4),
      currentQuestion,
    ]);
    setAnswers(randomAnswers);
  }, [glosario]);

  // Cuando cambia la pregunta, generar nuevas opciones
  useEffect(() => {
    const currentQuestion = glosario[currentQuestionIndex];
    if (currentQuestion) {
      generateOptions(currentQuestion);
    }
  }, [currentQuestionIndex, glosario, generateOptions]); // Añadir 'generateOptions' como dependencia

  // Manejar clic en una respuesta
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer.palabra_quechua === glosario[currentQuestionIndex].palabra_quechua) {
      setMessage("¡Felicidades! Respuesta correcta.");
      setTimeout(() => {
        setMessage(""); // Limpiar mensaje después de un tiempo
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Avanzar a la siguiente pregunta
      }, 1000);
    } else {
      setMessage("Respuesta incorrecta. Intenta nuevamente.");
    }
  };

  if (currentQuestionIndex >= glosario.length) {
    return <div>¡Has completado todas las preguntas! Felicitaciones.</div>;
  }

  const currentQuestion = glosario[currentQuestionIndex];

  return (
    <div className="question-container">
      <h2 className="question-title">Pregunta: ¿Cómo se dice "{currentQuestion.palabra_espanol}" en Quechua?</h2>
      <div className="message">{message && <p>{message}</p>}</div> 
      {currentQuestion.img_glosario ? (
        <img src={`http://localhost:3001${currentQuestion.img_glosario}`} alt="Imagen del glosario" className="glosario-image" />
      ) : (
        <p>No hay imagen disponible</p>
      )}
      <div className="answer-buttons">
        {answers.map((item, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswerClick(item)} 
            className="answer-button"
          >
            {item.palabra_quechua}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ComponenteGlosarioPracticar;
