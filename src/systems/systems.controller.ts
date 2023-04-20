import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';
import { SystemsService } from './systems.service';

@Controller('systems')
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @Get()
  findSystems() {
    return this.systemsService.findAll();
  }

  @Get(':id')
  findSystem(@Param('id') id: string) {
    return this.systemsService.findOne(id);
  }

  @Post()
  createSystem(@Body() createSystemDto: CreateSystemDto) {
    return this.systemsService.create(createSystemDto);
  }

  @Patch(':id')
  updateSystem(
    @Param('id') id: string,
    @Body() updateSystemDto: UpdateSystemDto,
  ) {
    return this.systemsService.update(id, updateSystemDto);
  }

  @Delete(':id')
  deleteSystem(@Param('id') id: string) {
    return this.systemsService.delete(id);
  }
}
