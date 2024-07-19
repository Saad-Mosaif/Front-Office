import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import EtablissementPage from './components/EtablissementPage';
import ComplexPage from './components/ComplexPage';
import SRIOPage from './components/SRIOPage';
import DFPage from './components/DFPage';
import PrivateRoute from './PrivateRoute';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/etablissement" element={
        <PrivateRoute>
          <EtablissementPage />
        </PrivateRoute>
      } />
      <Route path="/complex" element={
        <PrivateRoute>
          <ComplexPage />
        </PrivateRoute>
      } />
      <Route path="/srio" element={
        <PrivateRoute>
          <SRIOPage />
        </PrivateRoute>
      } />
      <Route path="/df" element={
        <PrivateRoute>
          <DFPage />
        </PrivateRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
