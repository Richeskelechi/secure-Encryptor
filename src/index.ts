import crypto from 'crypto';

class SecureEncryptor {
  private algorithm: string;
  private secretKey: Buffer;

  constructor(secretKey: string) {
    const trimmedSecretKey = secretKey.trim();
    // Validate the key
    const secretKeyRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{12,}$/;
    if (!secretKeyRegex.test(trimmedSecretKey)) {
      throw new Error('Encryption Secret key must be at least 12 characters long and include an uppercase letter, lowercase letter, number, and special character.');
    }

    this.algorithm = 'aes-256-cbc';
    this.secretKey = crypto.createHash('sha256').update(secretKey).digest();
  }

  encrypt(data: any): string {
    const iv = crypto.randomBytes(16);
    let text: string;
  
    if (typeof data === 'object') {
      text = JSON.stringify(data);
    } else {
      text = String(data);
    }
  
    const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
  
    return `${iv.toString('hex')}:${encrypted}`;
  }
  
  decrypt(encryptedText: string): any {
    const [ivHex, encrypted] = encryptedText.split(':');
  
    if (!ivHex || !encrypted) {
      throw new Error('Invalid encrypted text format.');
    }
  
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
  
    try {
      return JSON.parse(decrypted);
    } catch {
      return decrypted; // Return as string if JSON parsing fails
    }
  }
  
}

export default SecureEncryptor; // ES Modules

// Ensure compatibility with CommonJS
if (typeof module !== "undefined" && module.exports) {
  module.exports = SecureEncryptor;
  module.exports.default = SecureEncryptor;
}
