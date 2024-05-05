import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
   firstName: string;
   lastName: string;
   email: string;
   phoneNumber: string;
   userName: string;
   password: string;
}

const userSchema = new Schema<IUser>(
   {
      firstName: { type: String, },
      lastName: { type: String, },
      email: { type: String, },
      phoneNumber: { type: String, },
      userName: { type: String },
      password: { type: String },
   },
   { timestamps: true }
);

export default model<IUser>('User', userSchema);
