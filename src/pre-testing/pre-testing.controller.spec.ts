import { Test, TestingModule } from '@nestjs/testing';
import { PreTestingController } from './pre-testing.controller';

describe('PreTestingController', () => {
  let controller: PreTestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreTestingController],
    }).compile();

    controller = module.get<PreTestingController>(PreTestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
