import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreTesting } from '../entities/pre_testing.entity';

@Injectable()
export class PreTestingService {
	constructor(
		@InjectRepository(PreTesting)
		private preTestingRepo: Repository<PreTesting>		
	){}

	async showAll() {
		return await this.preTestingRepo.find({});
	}

	async addNewUser(name: string) {
		const user = {
			name: name
		};
		await this.preTestingRepo.insert(user);
	}
}
