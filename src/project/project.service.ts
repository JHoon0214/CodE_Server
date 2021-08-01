import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private projectRepo: Repository<Project>
	){}

	async createNewProject(projectInfo) {
		await this.projectRepo.insert(projectInfo);
	}
}
