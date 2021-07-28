import { Body, Controller, Post } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { SignUpService } from './sign-up.service';

@Controller('signUp')
export class SignUpController {
	constructor(
		private readonly signUpService:SignUpService
	){}
	@Post()
	async signUp(@Body() userInfo: Users) {
		userInfo.projectsID = [];
		await this.signUpService.signUp(userInfo);
	}

}
