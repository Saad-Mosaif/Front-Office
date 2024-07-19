import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/login', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        switch (response.data.role) {
          case 'DIRECTEUR_EFP':
            navigate('/etablissement');
            break;
          case 'DIRECTEUR_COMPLEXE':
            navigate('/complex');
            break;
          case 'SRIO':
            navigate('/srio');
            break;
          case 'DF':
            navigate('/df');
            break;
          default:
            navigate('/');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Invalid credentials');
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
