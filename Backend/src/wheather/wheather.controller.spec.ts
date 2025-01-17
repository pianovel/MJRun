import { Test, TestingModule } from '@nestjs/testing';
import { WheatherController } from './wheather.controller';

describe('WheatherController', () => {
  let controller: WheatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WheatherController],
    }).compile();

    controller = module.get<WheatherController>(WheatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
