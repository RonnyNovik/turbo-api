import { Prop } from '@nestjs/mongoose';

import { RejectOption } from 'src/consts/reject.const';

export class CreateSystemDto {
  @Prop()
  name: string;

  @Prop()
  hasPriorities: boolean;

  @Prop()
  rejects: RejectOption[];
}
