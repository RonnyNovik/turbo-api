import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { InspectionsModule } from './inspections/inspections.module';
import { SettingsModule } from './settings/settings.module';
import { SystemsModule } from './systems/systems.module';

console.log(process.env.JWT_SECRET_KEY);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env`, isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/supertest'),
    InspectionsModule,
    SettingsModule,
    AuthModule,
    SystemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
