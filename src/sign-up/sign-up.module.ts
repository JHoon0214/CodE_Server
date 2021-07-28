import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';

@Module({
  controllers: [SignUpController],
  providers: [SignUpService]
})
export class SignUpModule {}
