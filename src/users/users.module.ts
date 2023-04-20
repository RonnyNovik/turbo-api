import { Module } from '@nestjs/common';

import { UsersSchema } from 'src/schemas/user.schema';

import { SchemaName } from 'src/consts/schema.const';

import { getModuleForFeature } from 'src/utils/modules';

import { UsersService } from './users.service';

@Module({
  imports: [getModuleForFeature(SchemaName.USERS, UsersSchema)],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
