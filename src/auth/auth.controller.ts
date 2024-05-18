// src/auth/auth.controller.ts
import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() req) {
    return this.authService.login(req);
  }

  @Post('register')
  async register(@Body() req) {
    return this.authService.register(req);
  }
}
