import jwt from 'jsonwebtoken';
import { API_SECRET } from '../config/jwt';

export function generateToken(payload: object): string {
   const timeToExpire = 3;
   const sec = timeToExpire * 3600;
   const threeHoursLater: any = Date.now() / 1000 + sec;
   return jwt.sign({ ...payload, exp: threeHoursLater }, API_SECRET);
}
export function verifyToken(token: string): object {
   return jwt.verify(token, API_SECRET) as object;
}
