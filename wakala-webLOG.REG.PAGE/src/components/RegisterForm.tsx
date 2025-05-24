import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForms.css';

const RegisterForm: React.FC = () => {
  return (
    <div className="auth-container">
      <header className="app-header">
        <div className="logo-container">
          <div className="logo-circle">
            <img src="/logo.jpg" alt="Wakala Logo" />
          </div>
          <h1>Wakala</h1>
        </div>
        <nav className="main-nav">
          <button className="nav-btn">Nyumbani</button>
          <button className="nav-btn">Miamala</button>
          <button className="nav-btn">Mitandao</button>
          <button className="nav-btn active">Ingia</button>
        </nav>
      </header>

      <form className="auth-form">
        <h2>Usajili</h2>

        <input type="text" placeholder="Jina kamili" required />
        <input type="email" placeholder="Barua pepe" required />
        <input type="password" placeholder="Neno siri" required />
        <input type="password" placeholder="Hakiki neno siri" required />

        <button type="submit">Ingia</button>

        <p>
          Tyari una akaunti? <Link to="/">Ingia</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;