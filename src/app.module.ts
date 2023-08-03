import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { InspectionsModule } from './inspections/inspections.module';
import { SettingsModule } from './settings/settings.module';
import { SystemsModule } from './systems/systems.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env`, isGlobal: true }),
    MongooseModule.forRoot('mongodb://172.20.0.3:27017/supertest', {
      retryAttempts: 1,
      retryDelay: 1000,
    }),
    InspectionsModule,
    SettingsModule,
    AuthModule,
    SystemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
