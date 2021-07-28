import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [SignUpController],
  providers: [SignUpService]
})
export class SignUpModule {}
