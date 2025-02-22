import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AUTH_ERRORS } from 'src/utils/constants';

export class AuthDto {
  @IsNotEmpty({ message: AUTH_ERRORS.EMPTY_EMAIL })
  @IsEmail({}, { message: AUTH_ERRORS.INVALID_EMAIL })
  email: string;

  @IsNotEmpty({ message: AUTH_ERRORS.EMPTY_PASSWORD })
  @IsString({ message: AUTH_ERRORS.INVALID_PASSWORD })
  password: string;
}
