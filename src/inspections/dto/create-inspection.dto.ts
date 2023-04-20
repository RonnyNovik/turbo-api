import { Prop } from '@nestjs/mongoose';

import { RejectOption } from 'src/consts/reject.const';

export class CreateInspectionDto {
  @Prop()
  customerName: string;

  @Prop()
  customerAddress: string;

  @Prop()
  customerPhone: string;

  @Prop()
  carNumber: string;

  @Prop()
  carModel: string;

  @Prop()
  carYear: number;

  @Prop()
  engineNumber: string;

  @Prop()
  chassisNumber: string;

  @Prop()
  chassisType: string;

  @Prop()
  kilometrage: number;

  @Prop()
  tester: string;

  @Prop({ type: [Object] })
  results: RejectOption[];
}
