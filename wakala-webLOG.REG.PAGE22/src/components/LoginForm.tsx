import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForms.css';

const LoginForm: React.FC = () => {
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
        <h2>Ingia</h2>

        <input type="email" placeholder="Barua pepe" required />
        <input type="password" placeholder="Neno siri" required />

        <div className="form-extras">
          <label>
            <input type="checkbox" />
            Kumbuka
          </label>
          <a href="#">Umesahau neno siri?</a>
        </div>

        <button type="submit">Ingia</button>

        <button type="button" className="google-btn">Endelea na Google</button>

        <p>
          Huna akauniti? <Link to="/register">Ingia</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;