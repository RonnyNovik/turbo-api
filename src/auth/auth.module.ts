import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from 'src/users/users.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.JWT_SECRET_KEY,
          signOptions: { expiresIn: process.env.JWT_EXPIRATION_DURATION },
        };
      },
    }),
  ],

  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
