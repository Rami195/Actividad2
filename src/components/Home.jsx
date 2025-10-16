// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '60px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: '#007bff' }}>Bienvenido al Sistema de Registro</h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        Esta aplicación te permite registrarte paso a paso, completando tu información personal y de contacto.
      </p>

      <div style={{ marginTop: '30px' }}>
        <Link to="/register/personal">
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Comenzar Registro
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
