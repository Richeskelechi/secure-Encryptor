import SecureEncryptor from '../index';

describe('SecureEncryptor', () => {
  const validSecretKey = 'Secure409Secret741@#Test11';
  const encryptor = new SecureEncryptor(validSecretKey);

  it('should encrypt and decrypt a string correctly', () => {
    const originalData = 'Hello, World!';
    const encrypted = encryptor.encrypt(originalData);
    const decrypted = encryptor.decrypt(encrypted,);
    
    expect(decrypted).toBe(originalData);
  });

  it('should encrypt and decrypt a JSON object correctly', () => {
    const originalData = { message: 'Hello, World!' };
    const encrypted = encryptor.encrypt(originalData);
    const decrypted = encryptor.decrypt(encrypted);
    
    expect(decrypted).toEqual(originalData);
  });

  it('should throw an error for invalid secret key format', () => {
    const invalidSecretKey = 'shortKey!';
    expect(() => {
      new SecureEncryptor(invalidSecretKey);
    }).toThrow('Encryption Secret key must be at least 12 characters long and include an uppercase letter, lowercase letter, number, and special character.');
  });

  it('should throw an error for decryption with invalid data', () => {
    const invalidEncryptedText = 'invalid-encrypted-data';
    expect(() => {
      encryptor.decrypt(invalidEncryptedText);
    }).toThrow('Invalid encrypted text format.');
  });
  
});
