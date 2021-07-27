import { Test, TestingModule } from '@nestjs/testing';
import { PreTestingService } from './pre-testing.service';

describe('PreTestingService', () => {
  let service: PreTestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreTestingService],
    }).compile();

    service = module.get<PreTestingService>(PreTestingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
