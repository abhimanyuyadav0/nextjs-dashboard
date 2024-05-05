import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = Buffer.from('ThisIsASampleKey1234567890123456', 'utf8');
const iv = crypto.randomBytes(16);

function encryptData(data: object): { iv: string; encryptedData: string } {
  const text = JSON.stringify(data);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
   let encrypted = cipher.update(text, 'utf8', 'hex');
   encrypted += cipher.final('hex');
   return { iv: iv.toString('hex'), encryptedData: encrypted };
}

export { encryptData };
