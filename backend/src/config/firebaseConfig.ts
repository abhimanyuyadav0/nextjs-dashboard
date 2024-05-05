import * as admin from 'firebase-admin';
import * as serviceAccount from '../../public/global-94e72-firebase-adminsdk-ka5x0-49bde87f7b.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: 'gs://global-94e72.appspot.com',
});

const bucket = admin.storage().bucket();

const uploadToFirebase = async (file: any, filename: any) => {
  try {
    if (!file) {
      throw new Error('Invalid file provided');
    }

    // Set a unique filename or use the original filename
    const destination = `gallery/${filename}`;

    // Upload the file to Firebase Storage
    const fileUpload = await bucket.upload(file, {
      destination: destination,
    });

    console.log(`File uploaded to Firebase Storage at ${destination}`);

    // Get the download URL
    const url = await fileUpload[0].getSignedUrl({ action: 'read', expires: '03-09-2491' });

    // console.log('Download URL:', url);

    return { secure_url: url };
  } catch (error) {
    console.error('Error uploading to Firebase:', error);
    throw error;
  }
};

export default uploadToFirebase;
