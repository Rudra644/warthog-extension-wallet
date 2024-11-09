import axios from 'axios';

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed, background script is running.");
  chrome.tabs.create({ url: chrome.runtime.getURL("welcome.html") });
});

// Consolidated message listener for handling various background tasks
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log("Received message in background:", message);

  if (message.type === 'CREATE_WALLET') {
    console.log("Processing CREATE_WALLET request in background...");

    // Make the API request to create a wallet
    axios.get('http://127.0.0.1:3000/tools/wallet/new')
      .then(response => {
        console.log('Received wallet data from API:', response.data);

        if (response.data.code === 0) {
          const { address, privKey, pubKey } = response.data.data;
          sendResponse({ success: true, data: { address, privKey, pubKey } });
          console.log("Successfully sent response for CREATE_WALLET");
        } else {
          sendResponse({ success: false, error: 'Failed to create wallet.' });
          console.log("Failed to create wallet, sent failure response.");
        }
      })
      .catch(error => {
        console.error('Error creating wallet:', error.message);
        sendResponse({ success: false, error: error.message || 'Unknown error' });
        console.log("Sent error response for CREATE_WALLET due to API error.");
      });

    return true; // Keep the message channel open for async response
  }

  // Handle check for 'walletCreated' flag
  if (message.type === 'checkWalletCreated') {
    console.log("Checking 'walletCreated' status in storage...");
    chrome.storage.local.get('walletCreated', (result) => {
      console.log("Retrieved 'walletCreated' from storage:", result.walletCreated);
      const isCreated = !!result.walletCreated;

      if (isCreated) {
        chrome.storage.local.remove('walletCreated', () => {
          console.log("'walletCreated' flag removed from storage after read.");
        });
      }

      sendResponse({ walletCreated: isCreated });
    });
    return true; // Keeps message channel open for asynchronous response
  }
});
