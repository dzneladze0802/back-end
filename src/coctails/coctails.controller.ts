import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoctailsService } from './coctails.service';
import { CreateCoctailDto } from './dto/create-coctail.dto';
import { UpdateCoctailDto } from './dto/update-coctail.dto';

@Controller('coctails')
export class CoctailsController {
  constructor(private readonly coctailsService: CoctailsService) {}

  @Post()
  create(@Body() createCoctailDto: CreateCoctailDto) {
    return this.coctailsService.create(createCoctailDto);
  }

  @Get()
  findAll() {
    return this.coctailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coctailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoctailDto: UpdateCoctailDto) {
    return this.coctailsService.update(+id, updateCoctailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coctailsService.remove(+id);
  }
}
