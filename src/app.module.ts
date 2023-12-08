import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoctailsModule } from './coctails/coctails.module';

@Module({
  imports: [CoctailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
