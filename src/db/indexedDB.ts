import * as crypto from 'crypto-js';

const dbName = 'wallet-db';
const storeName = 'wallets';

// Initialize or open IndexedDB
const openDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'address' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Helper function to get all wallets and determine the next wallet name
const getWallets = async () => {
  const db = await openDB();
  return new Promise<IDBObjectStore[]>((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Function to save a new wallet with encryption and a unique name
export const saveWallet = async (passphrase: string, walletData: { address: string, pubKey: string, privKey: string }) => {
  const { address, pubKey, privKey } = walletData;

  // Step 1: Generate a unique wallet name
  const wallets = await getWallets();
  const walletNumber = wallets.length + 1;
  const walletName = `Wallet ${walletNumber}`;

  // Step 2: Encrypt the private key
  const salt = crypto.lib.WordArray.random(128 / 8);
  const derivedKey = crypto.PBKDF2(passphrase, salt, { keySize: 256 / 32, iterations: 10000 });
  const encryptedPrivKey = crypto.AES.encrypt(privKey, derivedKey.toString()).toString();

  // Step 3: Save the wallet in IndexedDB with walletName, encryptedPrivKey, and salt
  const db = await openDB();
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const walletRecord = { address, pubKey, encryptedPrivKey, salt: salt.toString(), walletName };
    
    const request = store.add(walletRecord);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};
