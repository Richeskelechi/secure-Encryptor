
# SecureEncryptor

`SecureEncryptor` is a Node.js package for securely encrypting and decrypting data using the AES-256-CBC algorithm. The package validates the encryption secret key to ensure it meets security standards and supports both string and JSON data formats.

## Installation

You can install `SecureEncryptor` using npm:

```bash
npm install secure-encryptor
```

or using Yarn:

```bash
yarn add secure-encryptor
```

## Usage

### JavaScript Usage

```javascript
const SecureEncryptor = require('secure-encryptor');

// Instantiate the encryptor with a valid secret key
const encryptor = new SecureEncryptor('Secure409Secret741@#Test11');

// Encrypt and Decrypt a string
const encryptedData = encryptor.encrypt('Hello, World!');
console.log('Encrypted:', encryptedData);

const decryptedData = encryptor.decrypt(encryptedData);
console.log('Decrypted:', decryptedData);

// Encrypt and Decrypt a JSON object
const encryptedJson = encryptor.encrypt({ message: 'Hello, World!' });
console.log('Encrypted JSON:', encryptedJson);

const decryptedJson = encryptor.decrypt(encryptedJson);
console.log('Decrypted JSON:', decryptedJson);
```

### TypeScript Usage

```typescript
import SecureEncryptor from 'secure-encryptor';

// Instantiate the encryptor with a valid secret key
const encryptor = new SecureEncryptor('Secure409Secret741@#Test11');

// Encrypt and Decrypt a string
const encryptedData = encryptor.encrypt('Hello, World!');
console.log('Encrypted:', encryptedData);

const decryptedData = encryptor.decrypt(encryptedData);
console.log('Decrypted:', decryptedData);

// Encrypt and Decrypt a JSON object
const encryptedJson = encryptor.encrypt({ message: 'Hello, World!' });
console.log('Encrypted JSON:', encryptedJson);

const decryptedJson = encryptor.decrypt(encryptedJson);
console.log('Decrypted JSON:', decryptedJson);
```

## Secret Key Validation

The `SecureEncryptor` constructor validates the secret key to ensure it meets the following criteria:

- At least 12 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character (`@$!%*?&#`)

If the secret key does not meet these criteria, an error will be thrown:

```bash
Error: Encryption Secret key must be at least 12 characters long and include an uppercase letter, lowercase letter, number, and special character.
```

## API

### `constructor(secretKey: string)`

- Initializes the encryptor with a secret key. The secret key is validated on initialization.

### `encrypt(data: string | object): string`

- Encrypts the provided data.
- `data`: The data to encrypt. Can be a `string` or a `JSON` object.
- Returns: A string containing the encrypted data, including the initialization vector (IV).

### `decrypt(encryptedText: string): string | object`

- Decrypts the provided encrypted text.
- `encryptedText`: The encrypted text containing both the IV and the data.
- Returns: The decrypted data in json format or string.

## Error Handling

The following errors may occur during encryption or decryption:

- **Invalid Secret Key Format**: When the secret key does not meet the validation requirements.
- **Invalid Encrypted Text Format**: If the encrypted text does not contain the expected IV and encrypted data.

## Tests

To run the tests, make sure you have `jest` installed. You can install it globally or as a dev dependency:

```bash
npm install --save-dev jest
```

Then, run the tests with the following command:

```bash
npm test
```

### Test Cases Include:

1. **Encrypt and Decrypt a string**: Validates that string data can be correctly encrypted and decrypted.
2. **Encrypt and Decrypt a JSON object**: Validates that JSON objects can be correctly encrypted and decrypted.
3. **Invalid Secret Key Format**: Tests that an error is thrown if the secret key doesn't meet the required format.
4. **Decryption with Invalid Data**: Tests that an error is thrown when trying to decrypt invalid encrypted data.

## License

MIT License.
