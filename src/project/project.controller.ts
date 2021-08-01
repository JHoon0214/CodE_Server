import { Body, Controller, Delete, Get, Post, UseGuards, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
	constructor(
		private readonly projectService:ProjectService
	){}

	@Post('/creation')
	async createNewProject(@Body() projectInfo) {
		await this.projectService.createNewProject(projectInfo)
	}

	@Delete('/deleteAll')
	async deleteAll() {
		await this.projectService.deleteAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get("/recent")
	async getRecentProjects(@Request() req) {
		return await this.projectService.getRecentProjects(req.user)
	}
}
