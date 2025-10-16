import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Register = () => {
  const location = useLocation();

  const steps = [
    { path: 'personal', label: 'Información Personal' },
    { path: 'contact', label: 'Información de Contacto' },
    { path: 'confirmation', label: 'Confirmación' }
  ];

  const currentStep = steps.findIndex(step =>
    location.pathname.includes(step.path)
  );

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Registro de Usuario</h1>

      {/* Indicador de pasos */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        {steps.map((step, index) => (
          <div key={step.path} style={{ textAlign: 'center', flex: 1 }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: index <= currentStep ? '#007bff' : '#ccc',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px'
              }}
            >
              {index + 1}
            </div>
            <span style={{ fontSize: '12px' }}>{step.label}</span>
          </div>
        ))}
      </div>
      <div style={{
        width: '100%',
        backgroundColor: '#eee',
        borderRadius: '10px',
        height: '10px',
        marginBottom: '30px',
        overflow: 'hidden'
      }}>
        <div
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`,
            height: '100%',
            backgroundColor: '#007bff',
            transition: 'width 0.3s ease'
          }}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Register; 