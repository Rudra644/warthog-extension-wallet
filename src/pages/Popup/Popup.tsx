import React, { useState } from 'react';
import { FaSyncAlt, FaCog, FaChevronDown } from 'react-icons/fa';
import './Popup.css'; // Import CSS

const Popup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Wallet');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Wallet':
        return <div className="tab-content">Wallet Content</div>;
      case 'NFTs':
        return <div className="tab-content">NFTs Content</div>;
      case 'Activity':
        return <div className="tab-content">Activity Content</div>;
      default:
        return <div className="tab-content">Wallet Content</div>;
    }
  };

  const getButtonClasses = (tab: string) =>
    `tab-button ${activeTab === tab ? 'active' : ''}`;

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

      <div className="popup-content">{renderActiveTab()}</div>

      <div className="popup-nav">
        <button
          className={getButtonClasses('Wallet')}
          onClick={() => setActiveTab('Wallet')}
        >
          Wallet
        </button>
        <button
          className={getButtonClasses('NFTs')}
          onClick={() => setActiveTab('NFTs')}
        >
          NFTs
        </button>
        <button
          className={getButtonClasses('Activity')}
          onClick={() => setActiveTab('Activity')}
        >
          Activity
        </button>
      </div>
    </div>
  );
};

export default Popup;
