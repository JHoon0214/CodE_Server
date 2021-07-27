import { TypeOrmModule } from '@nestjs/typeorm';
import { PreTesting } from '../entities/pre_testing.entity';
import { Module } from '@nestjs/common';
import { PreTestingController } from './pre-testing.controller';
import { PreTestingService } from './pre-testing.service';

@Module({
  imports: [TypeOrmModule.forFeature([PreTesting])],
  controllers: [PreTestingController],
  providers: [PreTestingService]
})
export class PreTestingModule {}
