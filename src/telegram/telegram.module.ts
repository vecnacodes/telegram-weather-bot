import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { TelegramService } from './telegram.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [TelegramService],
  exports: [TypeOrmModule, TelegramService],
})
export class TelegramModule {}