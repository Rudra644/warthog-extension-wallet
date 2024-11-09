import React, { useState, useEffect } from 'react';
import { FaSyncAlt, FaCog, FaChevronDown } from 'react-icons/fa';
import './Popup.css';

const Popup: React.FC = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const [walletCreated, setWalletCreated] = useState(false); // Wallet creation state

  useEffect(() => {
    // Check if the walletCreated flag is set in chrome.storage.local
    chrome.storage.local.get('walletCreated', (result) => {
      if (result.walletCreated) {
        setWalletCreated(true);
      }
      setLoading(false); // Stop loading once the check is done
    });
  }, []);

  if (loading) {
    // Show a loading spinner or message while checking the wallet status
    return (
      <div className="popup-container loading-screen">
        <h1>Loading...</h1>
        <p>Please wait while we check your wallet status.</p>
      </div>
    );
  }

  if (!walletCreated) {
    // Show the welcome message if no wallet is created yet
    return (
      <div className="popup-container welcome-screen">
        <h1>Welcome to Warthog Wallet</h1>
        <p>You'll need a wallet to access & manage your digital assets.</p>
        <button onClick={() => window.open(chrome.runtime.getURL('welcome.html'))}>
          Create or Import Wallet
        </button>
      </div>
    );
  }

  // Main content after the wallet has been created
  return (
    <div className="popup-container">
      <div className="popup-header">
        <div className="header-left">
          <button className="icon-btn">
            <FaChevronDown />
            Account 1
          </button>
          <button className="icon-btn">
            <FaSyncAlt />
          </button>
        </div>
        <div className="header-right">
          <button className="icon-btn">
            Mainnet <span className="status-indicator" />
          </button>
          <button className="icon-btn">
            <FaCog />
          </button>
        </div>
      </div>

      <div className="popup-content">
        {/* Main wallet content */}
        <div className="tab-content">Wallet Content</div>
      </div>

      <div className="popup-nav">
        <button className="tab-button active">Wallet</button>
        <button className="tab-button">NFTs</button>
        <button className="tab-button">Activity</button>
      </div>
    </div>
  );
};

export default Popup;
