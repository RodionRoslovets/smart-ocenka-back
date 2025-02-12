import { Module } from '@nestjs/common';
import { UserModel } from './user.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserModel,
        collection: 'User',
      },
    ]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
