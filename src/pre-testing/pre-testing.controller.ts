import { Controller, Get, Param } from '@nestjs/common';
import { PreTestingService } from './pre-testing.service';

@Controller('pre-testing')
export class PreTestingController {
	constructor(
		private readonly pre_testingService: PreTestingService
	){}

	@Get('/users')
	async showAll() {
		return await this.pre_testingService.showAll();
	}

	@Get('/newUser/:name')
	async addNewUser(@Param('name') name: string) {
		await this.pre_testingService.addNewUser(name);
	}
}
