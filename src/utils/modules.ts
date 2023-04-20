import { MongooseModule } from '@nestjs/mongoose';

import { SchemaNameType } from 'src/consts/schema.const';

export const getModuleForFeature = (name: SchemaNameType, schema: any) => {
  return MongooseModule.forFeature([
    {
      name,
      schema,
    },
  ]);
};
