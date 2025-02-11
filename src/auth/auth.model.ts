import { mongoose, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class AuthModel extends TimeStamps {
  @prop({ unique: true })
  _id: mongoose.Types.ObjectId;

  @prop({ unique: true })
  email: string;

  @prop()
  passwordHash: string;
}
