import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signup(@Body() body: AuthDto) {}

  @HttpCode(200)
  @Post('signin')
  async signin(@Body() body: AuthDto) {}
}
