import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Inspection, InspectionDocument } from 'src/schemas/inspection.schema';

import { SchemaName } from 'src/consts/schema.const';

import {
  createPdfStreamFromInspection,
  createPdfStreamFromInspectionAnalytics,
} from 'src/utils/pdf';

import { SettingsService } from 'src/settings/settings.service';

import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { createInspectionByDateQuery } from './inspection.query';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectModel(SchemaName.INSPECTION)
    private inspectionModel: Model<InspectionDocument>,
    private readonly settingsService: SettingsService,
  ) {}

  async create(createInspectionDto: CreateInspectionDto): Promise<Inspection> {
    const inspectionCount = await this.inspectionModel.countDocuments();
    const inspectionPrefix = +process.env.START_INSPECTION_COUNT_FROM || 1000;
    const inspectionNumber = `${inspectionPrefix + inspectionCount + 1}`;

    const inspection = {
      ...createInspectionDto,
      inspectionNumber,
    };

    return new this.inspectionModel(inspection).save();
  }

  async findAll() {
    return await this.inspectionModel.find();
  }

  async findOne(_id: string) {
    return await this.inspectionModel.findById(_id);
  }

  async findBySearchQuery(searchQuery: string) {
    const query = {
      $or: [
        { inspectionNumber: { $regex: `.*${searchQuery}.*`, $options: 'i' } },
        { customerName: { $regex: `.*${searchQuery}.*`, $options: 'i' } },
        { customerPhone: { $regex: `.*${searchQuery}.*`, $options: 'i' } },
        { carNumber: { $regex: `.*${searchQuery}.*`, $options: 'i' } },
        { 'tester.name': { $regex: `.*${searchQuery}.*`, $options: 'i' } },
      ],
    };

    return await this.inspectionModel.find(query);
  }

  async findByDateRange(startDate: string, endDate: string) {
    const query = createInspectionByDateQuery(startDate, endDate);

    return await this.inspectionModel.find(query);
  }

  async update(_id: string, updateInspectionDto: UpdateInspectionDto) {
    return await this.inspectionModel.updateOne(
      { _id },
      { $set: { ...updateInspectionDto } },
    );
  }

  async remove(_id: string) {
    return await this.inspectionModel.findOneAndRemove({ _id });
  }

  async getInspectionPDFStream(_id: string) {
    const settings = await this.settingsService.findFirst();
    const inspection = await this.findOne(_id);
    const pdfStream = await createPdfStreamFromInspection(inspection, settings);

    return pdfStream;
  }

  async getInspectionAnalyticsPDFStream(startDate: string, endDate: string) {
    const inspections = await this.findByDateRange(startDate, endDate);

    const pdfStream = await createPdfStreamFromInspectionAnalytics(
      inspections,
      startDate,
      endDate,
    );

    return pdfStream;
  }
}
