import { Module } from '@nestjs/common';

import { SettingsSchema } from 'src/schemas/settings.schema';

import { SchemaName } from 'src/consts/schema.const';

import { getModuleForFeature } from 'src/utils/modules';

import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

const SettingsSchemaModule = getModuleForFeature(
  SchemaName.SETTINGS,
  SettingsSchema,
);

@Module({
  imports: [SettingsSchemaModule],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [SettingsSchemaModule, SettingsService],
})
export class SettingsModule {}
