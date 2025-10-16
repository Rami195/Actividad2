import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();
  const [registrationData] = React.useState(
    () => JSON.parse(localStorage.getItem('registrationData') || '{}')
  );

  const handleConfirm = () => {
    alert('¡Registro completado exitosamente!');
    localStorage.removeItem('registrationData'); // Limpiar datos
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Confirmación de Registro</h2>
      <p>Por favor revisá tus datos antes de confirmar:</p>

      <div
        style={{
          border: '1px solid #ddd',
          padding: '20px',
          marginBottom: '20px',
          borderRadius: '8px',
        }}
      >
        <h3>Información Personal</h3>
        <p>
          <strong>Nombre:</strong> {registrationData.firstName} {registrationData.lastName}
        </p>
        <p>
          <strong>Fecha de Nacimiento:</strong> {registrationData.dateOfBirth}
        </p>
        <p>
          <strong>Género:</strong> {registrationData.gender}
        </p>

        <h3>Información de Contacto</h3>
        <p>
          <strong>Email:</strong> {registrationData.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {registrationData.phone}
        </p>
        <p>
          <strong>Dirección:</strong> {registrationData.address}
        </p>
        <p>
          <strong>Ciudad:</strong> {registrationData.city}
        </p>
      </div>

      <div>
        <Link to="/register/contact">
          <button type="button" style={{ marginRight: '10px' }}>
            Anterior
          </button>
        </Link>

        <Link to="/register/personal">
          <button
            type="button"
            style={{
              marginRight: '10px',
              backgroundColor: '#ffc107',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              padding: '8px 15px',
              cursor: 'pointer'
            }}
          >
            Editar Información
          </button>
        </Link>

        <button
          type="button"
          onClick={handleConfirm}
          style={{
            marginRight: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '8px 15px',
            cursor: 'pointer'
          }}
        >
          Confirmar Registro
        </button>

        <Link to="/">
          <button
            type="button"
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '8px 15px',
              cursor: 'pointer'
            }}
          >
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
