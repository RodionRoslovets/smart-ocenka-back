import { Prop } from '@nestjs/mongoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserModel extends TimeStamps {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;
}

export const UserSchema = new mongoose.Schema({
  passwordHash: String,
  email: String,
});
