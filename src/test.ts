import SecureEncryptor from './index'; // Adjust the path as necessary

const encryptor = new SecureEncryptor("RichesKelechi94#Mass");

// Encrypting a JSON object
const encryptedJson = encryptor.encrypt({ name: 'Alice', age: 25 });
console.log('Encrypted JSON:', encryptedJson);

// Encrypting a string
const encryptedString = encryptor.encrypt('Hello, world!');
console.log('Encrypted String:', encryptedString);

// Decrypting the encrypted JSON
const decryptedJson = encryptor.decrypt(encryptedJson);
console.log('Decrypted JSON:', decryptedJson);  // Should output { name: 'Alice', age: 25 }

// Decrypting the encrypted string
const decryptedString = encryptor.decrypt(encryptedString,);
console.log('Decrypted String:', decryptedString);  // Should output 'Hello, world!'
