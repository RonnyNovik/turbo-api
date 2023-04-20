import { Module } from '@nestjs/common';

import { SystemsSchema } from 'src/schemas/system.schema';

import { SchemaName } from 'src/consts/schema.const';

import { getModuleForFeature } from 'src/utils/modules';

import { SystemsController } from './systems.controller';
import { SystemsService } from './systems.service';

@Module({
  imports: [getModuleForFeature(SchemaName.SYSTEMS, SystemsSchema)],
  providers: [SystemsService],
  controllers: [SystemsController],
})
export class SystemsModule {}
