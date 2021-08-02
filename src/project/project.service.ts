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

	async deleteAll() {
		await this.projectRepo.delete({});
	}

	async getRecentProjects(user) {
		const allProjects = (await this.projectRepo.find({
			order: {
				updatedDate: 'DESC',
			}
		}))

		const recentProject = []
		let findedNum = 0;

		for(const project of allProjects) {
			let targetIndex = project.teamsMember.indexOf(user.eMail)
			if(targetIndex !== -1) {
				project["myRole"] = project.teamsRole[targetIndex];
				recentProject.push(project);
				findedNum++;
			}
			if(findedNum >= 3)
				break
		}

		for(findedNum; findedNum<3; findedNum++)
			recentProject.push({
				"name": ""
			})

		return {"recentProjectArr": recentProject}
	}

	async getAllProjects(user) {
		const allProjects = (await this.projectRepo.find({
			order: {
				updatedDate: 'DESC',
			}
		}))
		let myProject = []
		for(const project of allProjects) {
			if(project.teamsMember.includes(user.eMail)) {
				myProject.push(project);
			}
		}
		return {"ProjectArr": myProject};
	}
}
