import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { SettingsDocument } from 'src/schemas/settings.schema';

import { SchemaName } from 'src/consts/schema.const';

import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(SchemaName.SETTINGS)
    private settingsModel: Model<SettingsDocument>,
  ) {}

  async create(createSettingDto: CreateSettingDto) {
    return new this.settingsModel(createSettingDto).save();
  }

  async findAll() {
    return await this.settingsModel.find();
  }

  async findFirst() {
    const res = await this.settingsModel.find();
    return res[0];
  }

  async findOne(_id: string) {
    return await this.settingsModel.find({ _id });
  }

  async update(_id: string, updateSettingDto: UpdateSettingDto) {
    return await this.settingsModel.updateOne(
      { _id },
      { $set: { ...updateSettingDto } },
    );
  }

  async remove(_id: string) {
    return await this.settingsModel.deleteOne({ _id });
  }
}
