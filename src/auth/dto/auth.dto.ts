import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AUTH_ERRORS } from 'src/utils/constants';

export class AuthDto {
  @IsNotEmpty()
  @IsEmail({}, { message: AUTH_ERRORS.INVALID_EMAIL })
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  // @IsNotEmpty()
  // @is
  // role: 'admin' | 'org' | 'jury';
}
