// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Aprender from '../features/contents/Aprender';
import Practicar from '../features/contents/Practicar';
import Desafios from '../features/contents/Desafios';
import Minijuegos from '../features/contents/Minijuegos';
import Perfil from '../features/contents/Perfil';
import Soporte from '../features/contents/Soporte';
import Mas from "../features/contents/Mas";
//import Login from "../features/contents/Login";
import Login from '../features/contents/Login';  // Asegúrate de que la ruta sea correcta
import NotFound from "../features/contents/NotFound";
import Layout from "../components/principal/Layout";
import PublicLayout from "../components/principal/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from '../context/AuthContext';  // Usamos el hook useAuth

function AppRoutes() {
  const { isAuthenticated } = useAuth(); // Obtenemos el estado de autenticación desde el contexto

  return (
    <Routes>
      {/* Ruta pública (login) */}
      <Route path="/" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="" element={isAuthenticated ? <Navigate to="aprender" /> : <Navigate to="login" />} />
      </Route>

      {/* Rutas protegidas */}
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="aprender" element={<Aprender />} />
        <Route path="practicar" element={<Practicar />} />
        <Route path="desafios" element={<Desafios />} />
        <Route path="minijuegos" element={<Minijuegos />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="soporte" element={<Soporte />} />
        <Route path="mas" element={<Mas />}/>
      </Route>

      {/* Ruta no encontrada */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

