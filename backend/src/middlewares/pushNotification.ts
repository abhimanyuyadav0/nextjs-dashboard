// import { NextFunction, Request, Response } from 'express';
// import * as admin from 'firebase-admin';

// interface DecodedToken {
//    uid: string;
// }

// function verifyNotificationToken(req: Request, res: Response, next: NextFunction) {
//    const token = req.headers['authorization'];

//    if (!token || !token.startsWith('Bearer ')) {
//       return res.status(401).send({ message: 'Unauthorized' });
//    }

//    const fcmToken = token.split(' ')[1];
//    // Verify the token with Firebase Admin SDK
//    admin
//       .auth()
//       .verifyIdToken(fcmToken)
//       .then((decodedToken: DecodedToken) => {
//          req.body.token = decodedToken.uid;
//          next();
//       })
//       .catch(() => {
//          res.status(401).send({ message: 'Unauthorized' });
//       });
// }

// export { verifyNotificationToken };
