import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
	constructor(		
		@InjectRepository(Users)
		private userRepo: Repository<Users>
	) {};
	
	async findOne(eMail: string): Promise<Users | undefined> {
		return this.userRepo.findOne({"eMail": eMail});
	}
}
