import React from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import MainPage from './MainPage'
import TabletReminder from './Medication'

function MainApp() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <span style={{
          color: '#154d21',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          Welcome, {user?.name}!
        </span>
        <button
          onClick={handleLogout}
          style={{
            background: '#FED103',
            color: '#154d21',
            border: '2px solid #154d21',
            borderRadius: '25px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#154d21';
            e.target.style.color = '#FED103';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#FED103';
            e.target.style.color = '#154d21';
          }}
        >
          Logout
        </button>
      </div>
      <Navbar />
      <MainPage />
      <TabletReminder />
    </>
  )
}

export default MainApp
