import { Prop } from '@nestjs/mongoose';

import { Tester } from 'src/consts/settings.const';

export class CreateSettingDto {
  @Prop()
  testers: Tester[];

  @Prop()
  postInspectionText: string;

  @Prop()
  signatureTermsText: string;
}
