import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { UsersDocument } from 'src/schemas/user.schema';

import { SchemaName } from 'src/consts/schema.const';

import { CreateUserDto } from './dto/create-inspection.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(SchemaName.USERS)
    private userModel: Model<UsersDocument>,
  ) {}
  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findById(_id: string) {
    return await this.userModel.findOne({ _id });
  }

  async create(createUserDto: CreateUserDto) {
    return new this.userModel(createUserDto).save();
  }
}
