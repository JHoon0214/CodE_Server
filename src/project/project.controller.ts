import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
	constructor(
		private readonly projectService:ProjectService
	){}

	@Post('/creation')
	async createNewProject(@Body() projectInfo) {
		console.log("created");
		await this.projectService.createNewProject(projectInfo)
	}
}
