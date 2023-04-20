import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { Reject } from 'src/consts/reject.const';

export type SystemsDocument = HydratedDocument<System>;

@Schema()
export class System {
  @Prop()
  name: string;

  @Prop()
  hasPriorities: boolean;

  @Prop()
  position: number;

  @Prop()
  rejects: Reject[];
}

export const SystemsSchema = SchemaFactory.createForClass(System);
