import { Module } from '@nestjs/common';
import { SneakerResolver } from './sneaker.resolver';
import { SneakerService } from './sneaker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sneaker } from './sneaker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sneaker])],
  providers: [SneakerResolver, SneakerService],
})
export class SneakerModule {}
