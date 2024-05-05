import { Request, Response, NextFunction } from 'express';
import SaltKeyServices from '../services/saltKey.services';

const apiAuth = async (req: Request, res: Response, next: NextFunction) => {
  const saltKeyIndex = req.headers['x-salt-key-index'] as string;
  const saltKey = req.headers['x-salt-key'] as string;

  if (!saltKeyIndex || !saltKey) {
    return res.status(401).json({ message: 'Salt key and index headers are required.' });
  }

  try {
    const storedSaltKey = await SaltKeyServices.getSaltKeyByIndex(saltKeyIndex);

    if (!storedSaltKey) {
      return res.status(401).json({ message: 'Access denied.' });
    }

    const storedKey = storedSaltKey.key;

    if (storedKey !== saltKey) {
      return res.status(401).json({ message: 'Access denied.' });
    }
    next();
  } catch (error) {
    console.error('Error in apiAuth middleware:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export default apiAuth;