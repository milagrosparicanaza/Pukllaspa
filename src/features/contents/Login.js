import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { confirmarUsuario } from "../../components/usuario/Usuario";
import styles from './Login.module.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para manejar el error
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const id_usuario = await confirmarUsuario(username, password);
      if (id_usuario) {
        login(id_usuario);
        navigate("/aprender");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (err) {
      setError(`Hubo un error al intentar iniciar sesión. Detalles: ${err.message || err}`);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/aprender");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        <div className={styles['login-icon']}>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
        <h2 className={styles['login-title']}>Iniciar sesión</h2>
        <form onSubmit={(e) => e.preventDefault()} className={styles['login-form']}>
          <div className={styles['input-group']}>
            <input
              type="text"
              className={styles['login-input']}
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles['input-group']}>
            <input
              type="password"
              className={styles['login-input']}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles['options-group']}>
            <label>
              <input type="checkbox" />
              Recordarme
            </label>
          </div>
          <button type="button" onClick={handleLogin} className={styles['login-button']}>INGRESAR</button>
        </form>
        {error && <p className={styles['error-message']}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;  // Asegúrate de que esta línea esté presente
