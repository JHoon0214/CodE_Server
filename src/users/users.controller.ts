import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService
	){}

	@Get('/validation/:eMail')
	async checkUserValidation(@Param('eMail') eMail) {
		return await this.usersService.checkUserValidation(eMail);
	}
}
