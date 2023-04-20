import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { RejectOption } from 'src/consts/reject.const';
import { Tester } from 'src/consts/settings.const';

export type InspectionDocument = HydratedDocument<Inspection>;

@Schema()
export class Inspection {
  @Prop({ default: Date.now, index: true, type: Date })
  date_created: Date;

  @Prop()
  inspectionNumber: string | null;

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

  @Prop({ type: Object })
  tester: Tester;

  @Prop()
  electronicsIncluded: boolean;

  @Prop({ type: [Object] })
  results: RejectOption[];
}

export const InspectionSchema = SchemaFactory.createForClass(Inspection);
