import { Module } from '@nestjs/common';
import { CoctailsService } from './coctails.service';
import { CoctailsController } from './coctails.controller';

@Module({
  controllers: [CoctailsController],
  providers: [CoctailsService],
})
export class CoctailsModule {}
