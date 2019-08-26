import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Sneaker } from './sneaker.entity';

@Injectable()
export class SneakerService {
    constructor(
        @InjectRepository(Sneaker)
        private readonly sneakerRepository: MongoRepository<Sneaker>,
    ) {}

    async findAll(): Promise<Sneaker[]> {
        return this.sneakerRepository.find();
    }

}
