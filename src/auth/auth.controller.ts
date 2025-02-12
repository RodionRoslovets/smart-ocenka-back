import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @UsePipes(new ValidationPipe())
  @Post('signup')
  async signup(@Body() body: AuthDto) {
    console.log(body);
  }

  @HttpCode(200)
  @Post('signin')
  async signin(@Body() body: AuthDto) {
    console.log(body);
  }
}
