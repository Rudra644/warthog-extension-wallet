import React, { useState } from 'react';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import './Create.css';
import { saveWallet } from '../../../db/indexedDB';

const Create: React.FC = () => {
  const [passphrase, setPassphrase] = useState('');
  const [confirmPassphrase, setConfirmPassphrase] = useState('');
  const [error, setError] = useState('');
  const [walletCreated, setWalletCreated] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (passphrase.length < 8) {
      setError('Passphrase must be at least 8 characters.');
      return;
    }
    if (passphrase !== confirmPassphrase) {
      setError('Passphrases do not match.');
      return;
    }

    console.log("Sending CREATE_WALLET message to background...");

    chrome.runtime.sendMessage({ type: 'CREATE_WALLET' }, async (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error from background script:', chrome.runtime.lastError.message);
        setError('Failed to communicate with the background script.');
        return;
      }

      if (response && response.success) {
        console.log("Received response from background:", response);
        const { address, privKey, pubKey } = response.data;
        try {
          // Encrypt and save wallet using indexedDB
          await saveWallet(passphrase, { address, privKey, pubKey });
          setWalletCreated(true);

          // Set the walletCreated flag in Chrome storage
          chrome.storage.local.set({ walletCreated: true });
        } catch (saveError) {
          setError('Failed to save wallet. Please try again.');
          console.error('Save error:', saveError);
        }
      } else {
        setError(response?.error || 'Failed to create wallet.');
        console.error("Error received from background response:", response?.error);
      }
    });
  };

  return (
    <div className="create-container">
      <div className="top-flare"></div>

      {walletCreated ? (
        <div className="create-left">
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot active"></span>
          </div>
          <h1 className="success-heading">Wallet is Ready!</h1>
          <p className="success-message">
            Your wallet has been securely created and encrypted. You're now ready to use Warthog Wallet.
          </p>

          <div className="social-cards">
            <div className="social-card">
              <FaTwitter className="social-icon" />
              <span>Follow Warthog Network on X</span>
            </div>
            <div className="social-card">
              <FaDiscord className="social-icon" />
              <span>Join Warthog Network Discord</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="create-left">
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
          <h1 className="create-heading">Set Up Your Warthog Wallet</h1>
          <p className="create-subtitle">Make sure to choose a strong passphrase for your wallet.</p>
          <form className="create-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="passphrase">Enter Passphrase</label>
              <input
                type="password"
                id="passphrase"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                required
                minLength={8}
                placeholder="Enter passphrase"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassphrase">Confirm Passphrase</label>
              <input
                type="password"
                id="confirmPassphrase"
                value={confirmPassphrase}
                onChange={(e) => setConfirmPassphrase(e.target.value)}
                required
                placeholder="Confirm passphrase"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">Confirm</button>
          </form>
        </div>
      )}

      <div className="create-right">
        <img src="/logo.svg" alt="Logo" className="create-image" />
        <p className="create-footer">
          Delivering easy-to-use decentralized finance to the masses.
        </p>
      </div>
    </div>
  );
};

export default Create;
