import { Test, TestingModule } from '@nestjs/testing';
import { SneakerResolver } from './sneaker.resolver';

describe('SneakerResolver', () => {
  let resolver: SneakerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SneakerResolver],
    }).compile();

    resolver = module.get<SneakerResolver>(SneakerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
