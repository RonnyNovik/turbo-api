import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { SystemsDocument } from 'src/schemas/system.schema';

import { SchemaName } from 'src/consts/schema.const';

import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';

@Injectable()
export class SystemsService {
  constructor(
    @InjectModel(SchemaName.SYSTEMS)
    private systemModel: Model<SystemsDocument>,
  ) {}

  findAll() {
    return this.systemModel.find();
  }

  findOne(_id: string) {
    return this.systemModel.find({ _id });
  }

  create(createSystemDto: CreateSystemDto) {
    return new this.systemModel(createSystemDto).save();
  }

  update(_id: string, updateSystemDto: UpdateSystemDto) {
    return this.systemModel.updateOne(
      { _id },
      { $set: { ...updateSystemDto } },
    );
  }

  delete(_id: string) {
    return this.systemModel.findByIdAndDelete({ _id });
  }
}
