import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InspectionsService } from './inspections.service';

@Controller('inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Post()
  create(@Body() createInspectionDto: CreateInspectionDto) {
    return this.inspectionsService.create(createInspectionDto);
  }

  @Get('search')
  findBySearchQuery(@Query('searchQuery') searchQuery: string) {
    return this.inspectionsService.findBySearchQuery(searchQuery);
  }

  @Get('filterByDate')
  findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.inspectionsService.findByDateRange(startDate, endDate);
  }

  @Get('pdf/:id')
  async getInspectionPDF(@Param('id') id: string, @Res() res: Response) {
    const { stream, bufferLength } =
      await this.inspectionsService.getInspectionPDFStream(id);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': bufferLength,
    });
    stream.pipe(res);
  }

  @Get('analytics')
  async getInspectionAnalyticsPDF(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Res() res: Response,
  ) {
    const { stream, bufferLength } =
      await this.inspectionsService.getInspectionAnalyticsPDFStream(
        startDate,
        endDate,
      );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': bufferLength,
    });

    stream.pipe(res);
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.inspectionsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.inspectionsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInspectionDto: UpdateInspectionDto,
  ) {
    return this.inspectionsService.update(id, updateInspectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inspectionsService.remove(id);
  }
}
