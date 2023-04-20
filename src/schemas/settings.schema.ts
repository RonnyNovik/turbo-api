import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { Tester } from 'src/consts/settings.const';

export type SettingsDocument = HydratedDocument<Settings>;

@Schema()
export class Settings {
  @Prop()
  testers: Tester[];

  @Prop()
  postInspectionText: string;

  @Prop()
  signatureTermsText: string;
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);
