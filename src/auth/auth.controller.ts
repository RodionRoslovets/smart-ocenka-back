import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AUTH_ERRORS } from 'src/utils/constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('signup')
  async signup(@Body() body: AuthDto) {
    const oldUser = await this.authService.getUserByEmail(body.email);

    if (oldUser) {
      throw new BadRequestException(AUTH_ERRORS.USER_ALREADY_EXISTS);
    }

    return this.authService.createUser(body);
  }

  @HttpCode(200)
  @Post('signin')
  async signin(@Body() body: AuthDto) {
    const oldUser = await this.authService.getUserByEmail(body.email);
    console.log(body, oldUser);

    if (!oldUser) {
      throw new BadRequestException(AUTH_ERRORS.USER_NOT_EXISTS);
    }

    if (
      !this.authService.checkUserPasswordHash(
        body.password,
        oldUser.passwordHash,
      )
    ) {
      throw new UnauthorizedException(AUTH_ERRORS.PASSWORD_IS_WRONG);
    }

    return {
      email: oldUser.email,
    };
  }
}
