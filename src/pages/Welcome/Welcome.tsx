import React from 'react';
import { FaWallet, FaRedo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateWallet = () => {
    navigate('/create'); // Navigates to `/#/create` with HashRouter
  };

  return (
    <div className="welcome-container">
      {/* Flare overlay at the top */}
      <div className="top-flare"></div>

      {/* Left Content */}
      <div className="welcome-left">
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <h1 className="welcome-heading">Welcome to Warthog Wallet</h1>

        <p className="welcome-subtitle">
          Your effortless crypto journey starts here. Take the first step, create or restore your wallet to get started.
        </p>

        <div className="action-cards">
          <div className="card create-wallet-card" onClick={handleCreateWallet}>
            <FaWallet className="card-icon" />
            <span>Create Wallet</span>
          </div>
          <div className="card restore-wallet-card">
            <FaRedo className="card-icon" />
            <span>Restore Wallet</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="welcome-right">
        <img src="/logo.svg" alt="Logo" className="welcome-image" />
        <p className="welcome-footer">
          Delivering easy-to-use decentralized finance to the masses.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
