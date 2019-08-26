import { Query, Resolver } from '@nestjs/graphql';
import { SneakerService } from './sneaker.service';
import { Sneaker } from './sneaker.entity';

@Resolver('Sneaker')
export class SneakerResolver {
    constructor(private readonly sneakerService: SneakerService) {}

    @Query(() => String)
    async hello() {
        return 'world';
    }

    @Query(() => [Sneaker])
    async sneakers() {
        return this.sneakerService.findAll();
    }

}
