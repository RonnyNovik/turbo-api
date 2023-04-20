import { Module } from '@nestjs/common';

import { InspectionSchema } from 'src/schemas/inspection.schema';

import { SchemaName } from 'src/consts/schema.const';

import { getModuleForFeature } from 'src/utils/modules';

import { SettingsModule } from 'src/settings/settings.module';
import { SettingsService } from 'src/settings/settings.service';

import { InspectionsController } from './inspections.controller';
import { InspectionsService } from './inspections.service';

@Module({
  imports: [
    SettingsModule,
    getModuleForFeature(SchemaName.INSPECTION, InspectionSchema),
  ],
  controllers: [InspectionsController],
  providers: [InspectionsService, SettingsService],
})
export class InspectionsModule {}
