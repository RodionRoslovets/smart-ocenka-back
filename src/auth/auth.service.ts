import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { compare, genSaltSync, hashSync } from 'bcryptjs';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('UserModel')
    private userModel: Model<UserModel>,
  ) {}

  async createUser(dto: AuthDto) {
    const salt = genSaltSync(10);

    const newUser = new this.userModel({
      email: dto.email,
      passwordHash: hashSync(dto.password, salt),
    });

    return newUser.save();
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email });

    return user;
  }

  async checkUserPasswordHash(password: string, hash: string) {
    const passwordMatches = await compare(password, hash);

    return passwordMatches;
  }
}
