import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { createHashedUserDto, verifyPassword } from 'src/utils/password';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isPasswordMatching = await verifyPassword(password, user.password);
    if (!isPasswordMatching)
      throw new UnauthorizedException('Invalid email or password');

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) throw new UnauthorizedException('Invalid email or password');

    const newUserDto = await createHashedUserDto(email, password);
    const newUser = await this.userService.create(newUserDto);
    const payload = { username: newUser.email, sub: newUser._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
