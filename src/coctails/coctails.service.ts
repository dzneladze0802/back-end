import { Injectable } from '@nestjs/common';
import { CreateCoctailDto } from './dto/create-coctail.dto';
import { UpdateCoctailDto } from './dto/update-coctail.dto';

@Injectable()
export class CoctailsService {
  create(createCoctailDto: CreateCoctailDto) {
    return 'This action adds a new coctail';
  }

  findAll() {
    return `This action returns all coctails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coctail`;
  }

  update(id: number, updateCoctailDto: UpdateCoctailDto) {
    return `This action updates a #${id} coctail`;
  }

  remove(id: number) {
    return `This action removes a #${id} coctail`;
  }
}
