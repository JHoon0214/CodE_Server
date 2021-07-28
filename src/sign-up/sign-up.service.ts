import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
	constructor(
		@InjectRepository(Users)
		private userRepo: Repository<Users>
	){}

	async signUp(userInfo: Users) {
		await this.userRepo.insert(userInfo)
	}
}
